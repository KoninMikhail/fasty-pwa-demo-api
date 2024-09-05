import prisma from '../client';
import { Address, Client, Contact, Delivery, DeliveryState, Prisma, User } from '@prisma/client';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import exclude from '../utils/exclude';

const getDeliveriesQueryStateFilter = (state?: string | string[]) => {
  if (!state) return undefined;
  return Array.isArray(state) ? { state: { in: state } } : { state };
};
const getDeliveriesQueryWeightFilter = (weightMin?: number, weightMax?: number) => {
  if (!weightMin && !weightMax) return undefined;
  if (weightMin && weightMax) return { weight: { gte: weightMin, lte: weightMax } };
  if (weightMin) return { weight: { gte: weightMin } };
  return { weight: { lte: weightMax } };
};

const getDeliveriesQueryDateFilter = (dateFrom?: string, dateTo?: string) => {
  const getDate = (givenDate: string): string => {
    const frozenDate = new Date(givenDate);
    const offset = frozenDate.getTimezoneOffset();
    const outputDate = new Date(frozenDate.getTime() - offset * 60 * 1000);
    return outputDate.toISOString().split('T')[0];
  };

  if (dateFrom && dateTo) {
    if (new Date(dateFrom).getTime() === new Date(dateTo).getTime()) {
      console.log('dateFrom === dateTo');
      const singleDay = new Date(getDate(dateFrom));
      const nextDay = new Date(singleDay.getTime() + 24 * 60 * 60 * 1000);
      return {
        date: {
          gte: singleDay,
          lt: nextDay
        }
      };
    }
    return { date: { gte: new Date(getDate(dateFrom)), lte: new Date(getDate(dateTo)) } };
  }
  if (dateFrom) return { date: { gte: new Date(getDate(dateFrom)) } };
  if (dateTo) return { date: { lte: new Date(getDate(dateTo)) } };
  return undefined;
};

type DeliveryFilter = {
  state?: string | string[];
  dateFrom?: string;
  dateTo?: string;
  weightMin?: number;
  weightMax?: number;
  [key: string]: any;
};

const queryDeliveries = async <Include extends keyof Prisma.DeliveryInclude>(
  filter: DeliveryFilter,
  options: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  },
  include: Include[] = ['contact', 'courier', 'manager', 'address', 'client'] as Include[]
) => {
  const page = options.page ?? 1;
  const limit = options.limit ?? 10;
  const sortBy = options.sortBy ?? 'date';
  const sortType = options.sortType ?? 'desc';

  const state = getDeliveriesQueryStateFilter(filter.state) ?? {};
  const weight = getDeliveriesQueryWeightFilter(filter.weightMin, filter.weightMax) ?? {};
  const date = getDeliveriesQueryDateFilter(filter.dateFrom, filter.dateTo) ?? {};
  const omittedFilter = exclude(filter, ['state', 'dateFrom', 'dateTo', 'weightMin', 'weightMax']);

  const deliveries = await prisma.delivery.findMany({
    where: {
      AND: [
        ...Object.entries(omittedFilter).map(([key, value]) => ({ [key]: value })),
        state,
        date,
        weight
      ]
    },
    include: include.reduce((acc, cur) => {
      if (cur === 'address') return { ...acc, [cur]: { include: { subway: true } } };
      return { ...acc, [cur]: true };
    }, {}),
    skip: page > 1 ? page * limit : 0,
    take: limit,
    orderBy: sortBy ? { [sortBy]: sortType } : undefined
  });

  return deliveries as (Partial<Delivery> & {
    contact: Contact;
    courier: User;
    manager: User;
    address: Address;
    client: Client;
  })[];
};

const queryDeliveriesByText = async (query: string) => {
  const deliveryId = Number.isNaN(parseFloat(query)) ? undefined : parseFloat(query);
  return prisma.delivery.findMany({
    where: {
      OR: [
        {
          deliveryId: {
            equals: deliveryId
          },
          address: {
            address: {
              contains: query,
              mode: 'insensitive'
            }
          }
        },
        {
          contents: {
            contains: query,
            mode: 'insensitive'
          }
        }
      ]
    },
    include: {
      contact: true,
      courier: true,
      manager: true,
      address: {
        include: {
          subway: true
        }
      },
      client: true
    },
    take: 30
  });
};

const findDeliveryById = async (deliveryId: string) => {
  return prisma.delivery.findFirst({
    where: {
      id: deliveryId
    },
    include: {
      contact: true,
      courier: true,
      manager: true,
      address: {
        include: {
          subway: true
        }
      },
      client: true
    }
  });
};

const updateDeliveryById = async <Include extends keyof Prisma.DeliveryInclude>(deliveryId: string, updateBody: any,  include: Include[] = ['contact', 'courier', 'manager', 'address', 'client'] as Include[]) => {
  return prisma.delivery.update({
    where: { id: deliveryId },
    data: updateBody,
    include: include.reduce((acc, cur) => {
      if (cur === 'address') return { ...acc, [cur]: { include: { subway: true } } };
      return { ...acc, [cur]: true };
    }, {}),
  });
};

const attachCourierToDelivery = async (deliveryId: string, courierId: string) => {
  if (!courierId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Courier ID is required');
  }
  return updateDeliveryById(deliveryId, { courier_id: courierId, state: 'delivering' });
};

const setDeliveryState = async (deliveryId: string, state: DeliveryState, comment: string = '') => {
  if (!Object.values(DeliveryState).includes(state)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid state');
  }
  return updateDeliveryById(deliveryId, { state, comment });
};

export default {
  queryDeliveries,
  findDeliveryById,
  updateDeliveryById,
  attachCourierToDelivery,
  setDeliveryState,
  queryDeliveriesByText
};
