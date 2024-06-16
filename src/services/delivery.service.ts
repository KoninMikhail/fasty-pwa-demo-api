import prisma from '../client';
import { Delivery, DeliveryState, Prisma, User } from '@prisma/client';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';

interface DeliveryFilterParams {
  userId?: User['id'];
  car?: boolean;
  express?: boolean;
  state?: DeliveryState | DeliveryState[]; // Single state or array of states
  dateFrom?: Date; // ISO string date
  dateTo?: Date; // ISO string date
  weightMin?: number;
  weightMax?: number;
}

const getAllDeliveries = async () => {
  return prisma.delivery.findMany();
};

const getDeliveriesByParams = async (
  filters: DeliveryFilterParams = {},
  include: Prisma.DeliveryInclude = {}
) => {
  const { userId, car, express, state, dateFrom, dateTo, weightMin, weightMax } = filters;

  const dateFilters = [];
  if (dateFrom) {
    dateFilters.push({
      date: {
        gte: dateFrom
      }
    });
  }
  if (dateTo) {
    dateFilters.push({
      date: {
        lte: dateTo
      }
    });
  }

  let stateCondition = {};
  if (Array.isArray(state)) {
    stateCondition = {
      state: {
        in: state // Prisma 'in' condition for array of states
      }
    };
  } else if (state) {
    stateCondition = { state };
  }

  const userCondition = userId
    ? {
        OR: [
          {
            courier_id: userId
          },
          {
            manager_id: userId
          }
        ]
      }
    : {};

  return prisma.delivery.findMany({
    where: {
      AND: [
        ...dateFilters,
        ...(Object.keys(stateCondition).length ? [stateCondition] : []),
        ...(Object.keys(userCondition).length ? [userCondition] : []),
        car !== undefined ? { car } : undefined,
        express !== undefined ? { express } : undefined,
        weightMin !== undefined ? { weight: { gte: weightMin } } : undefined,
        weightMax !== undefined ? { weight: { lte: weightMax } } : undefined
      ].filter((condition) => condition !== undefined) as Prisma.DeliveryWhereInput[]
    },
    include
  });
};

const getDeliveryById = async (deliveryId: string) => {
  return prisma.delivery.findFirst({
    where: {
      id: deliveryId
    },
    include: {
      contact: true,
      address: {
        include: {
          subway: true
        }
      },
      client: true
    }
  });
};

const updateDeliveryById = async (deliveryId: string, updateBody: any) => {
  return prisma.delivery.update({
    where: { id: deliveryId },
    data: updateBody
  });
};

const attachCourierToDelivery = async (deliveryId: string, courierId: string) => {
  if (!courierId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Courier ID is required');
  }
  return updateDeliveryById(deliveryId, { courier_id: courierId });
};

const setDeliveryState = async (deliveryId: string, state: DeliveryState) => {
  if (!Object.values(DeliveryState).includes(state)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid state');
  }
  return updateDeliveryById(deliveryId, { state });
};

export default {
  getDeliveriesByParams,
  getDeliveryById,
  updateDeliveryById,
  attachCourierToDelivery,
  setDeliveryState
};
