import catchAsync from '../utils/catchAsync';
import { User } from '@prisma/client';
import { deliveryService } from '../services';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import exclude from '../utils/exclude';

/* eslint-disable @typescript-eslint/no-unused-vars */

const getDeliveriesWithoutCourier = catchAsync(async (req, res) => {
  const { query } = req;
  const dateFrom = typeof query.dateFrom === 'string' ? new Date(query.dateFrom) : undefined;
  const dateTo = typeof query.dateTo === 'string' ? new Date(query.dateTo) : undefined;

  const allUpcomingDeliveries = await deliveryService
    .getDeliveriesByParams(
      {
        dateFrom,
        dateTo,
        state: ['created']
      },
      {
        address: {
          include: {
            subway: true
          }
        }
      }
    )
    .then((deliveries) => deliveries.filter((delivery) => !delivery.courier_id))
    .then((deliveries) => {
      return deliveries.map((delivery) => {
        const { courier_id, client_id, address_id, manager_id, contact_id, address, ...rest } =
          delivery;
        return {
          ...rest,
          address: exclude(address, ['clientsIDs', 'subway_id'])
        };
      });
    });

  return res.send(allUpcomingDeliveries);
});

const getInProgressUserDeliveries = catchAsync(async (req, res) => {
  const user = req.user as User;
  const deliveries = await deliveryService.getDeliveriesByParams(
    {
      userId: user.id
    },
    {
      contact: true,
      address: {
        include: {
          subway: true
        }
      },
      manager: true,
      client: true
    }
  );
  const deliveriesWithoutIds = deliveries.map((delivery) => {
    const {
      contact,
      address,
      client,
      client_id,
      address_id,
      courier_id,
      contact_id,
      manager_id,
      ...rest
    } = delivery;
    return {
      ...rest,
      contact: exclude(contact, ['clientIDs']),
      address: exclude(address, ['clientsIDs']),
      client: exclude(client, ['contactsIDs', 'addressesIDs', 'createdAt', 'updatedAt'])
    };
  });
  return res.send(deliveriesWithoutIds);
});

const getCompletedUserDeliveries = catchAsync(async (req, res) => {
  const user = req.user as User;
  const deliveries = await deliveryService.getDeliveriesByParams({
    userId: user.id,
    state: ['done', 'canceled']
  });
  return res.send(deliveries);
});

const getDeliveryById = catchAsync(async (req, res) => {
  const { deliveryId } = req.params;
  const delivery = await deliveryService.getDeliveryById(deliveryId);

  if (!delivery) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Delivery not found');
  }

  return res.send(delivery);
});

const setDeliveryState = catchAsync(async (req, res) => {
  const { deliveryId } = req.params;
  const deliveryWithUpdatedState = await deliveryService.setDeliveryState(
    deliveryId,
    req.body.state
  );
  return res.send(deliveryWithUpdatedState);
});

const attachDeliveryToUser = catchAsync(async (req, res) => {
  const { deliveryId } = req.params;
  const user = req.user as User;
  const delivery = await deliveryService.attachCourierToDelivery(deliveryId, user.id);

  if (!delivery) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Delivery not found');
  }

  return res.send(delivery);
});

const getDeliveriesByQuery = catchAsync(async (req, res) => {
  const { query } = req.query;
  return res.status(httpStatus.NO_CONTENT).send();
});

export default {
  getDeliveriesWithoutCourier,
  getDeliveriesOfCurrentUser: getInProgressUserDeliveries,
  getCompletedUserDeliveries,
  getDeliveryById,
  setDeliveryState,
  attachDeliveryToUser,
  getDeliveriesByQuery
};
