import catchAsync from '../utils/catchAsync';
import { DeliveryState, User } from '@prisma/client';
import { deliveryService, searchQueryService } from '../services';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import exclude from '../utils/exclude';
import pick from '../utils/pick';

/* eslint-disable @typescript-eslint/no-unused-vars */

const getUnassignedDeliveries = catchAsync(async (req, res) => {
  const { query } = req;

  const options = pick(query, ['limit', 'page', 'sortBy', 'sortType']);
  const filters = pick(query, ['express', 'car', 'dateFrom', 'dateTo', 'weightMin', 'weightMax']);

  const deliveries = await deliveryService.queryDeliveries(
    {
      ...filters,
      state: [DeliveryState.created]
    },
    options
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

const getCourierDeliveries = catchAsync(async (req, res) => {
  const user = req.user as User;
  const { query } = req;

  const filters = pick(query, ['express', 'car', 'dateFrom', 'dateTo', 'weightMin', 'weightMax']);
  const options = pick(query, ['limit', 'page', 'sortBy', 'sortType']);

  const deliveries = await deliveryService.queryDeliveries(
    {
      ...filters,
      courier_id: user.id,
      state: DeliveryState.delivering
    },
    options
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

const getCourierHistoryDeliveries = catchAsync(async (req, res) => {
  const options = pick(req.query, ['limit', 'page']);
  const user = req.user as User;

  const deliveries = await deliveryService.queryDeliveries(
    {
      courier_id: user.id,
      state: [DeliveryState.done, DeliveryState.canceled]
    },
    options
  );
  const deliveriesWithoutIds = deliveries.map((delivery) => ({
    ...exclude(delivery, ['manager_id', 'contact_id', 'client_id', 'address_id'])
  }));

  return res.send(deliveriesWithoutIds);
});

const getDeliveryById = catchAsync(async (req, res) => {
  const { deliveryId } = req.params;
  const delivery = await deliveryService.findDeliveryById(deliveryId);

  if (!delivery) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Delivery not found');
  }

  const deliveryWithoutIds = {
    ...exclude(delivery, ['client_id', 'address_id', 'courier_id', 'contact_id', 'manager_id']),
    contact: exclude(delivery.contact, ['clientIDs']),
    address: exclude(delivery.address, ['clientsIDs']),
    client: exclude(delivery.client, ['contactsIDs', 'addressesIDs', 'createdAt', 'updatedAt'])
  };

  return res.send(deliveryWithoutIds);
});

const setDeliveryState = catchAsync(async (req, res) => {
  const { deliveryId } = req.params;
  const { state } = req.body;
  const updatedDelivery = await deliveryService.setDeliveryState(deliveryId, state);
  return res.send(updatedDelivery);
});

const attachDeliveryToUser = catchAsync(async (req, res) => {
  const user = req.user as User;
  const { deliveryId } = req.params;
  const userId = user.id;
  const delivery = await deliveryService.attachCourierToDelivery(deliveryId, userId);

  if (!delivery) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Delivery not found');
  }

  const updatedDelivery = await deliveryService.findDeliveryById(deliveryId);

  return res.send(updatedDelivery);
});

const getDeliveriesByQuery = catchAsync(async (req, res) => {
  const { query } = req.query;
  if (query) {
    await searchQueryService.createQueryHistoryItem((req.user as User).id, query as string);
    const deliveries = await deliveryService.queryDeliveriesByText(query as string);
    return res.send(deliveries);
  }
  return res.send([]);
});

const getQueryHistory = catchAsync(async (req, res) => {
  const user = req.user as User;
  const userId = user.id;
  const queries = await searchQueryService.getQueryHistoryByUserId(userId);
  const onlyStrings = queries.map((query) => query.query);
  return res.send(onlyStrings);
});

const removeQueryHistoryItem = catchAsync(async (req, res) => {
  const user = req.user as User;
  const userId = user.id;
  const query = req.params.queryForDelete as string;
  await searchQueryService.removeQueryHistoryItemByUserId(userId, query);
  return res.send(true);
});

export default {
  getUnassignedDeliveries,
  getCourierDeliveries,
  getCourierHistoryDeliveries,
  getDeliveryById,
  setDeliveryState,
  attachDeliveryToUser,
  getDeliveriesByQuery,
  getQueryHistory,
  removeQueryHistoryItem
};
