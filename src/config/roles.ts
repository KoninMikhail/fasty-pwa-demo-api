import { Role } from '@prisma/client';

const allRoles = {
  [Role.COURIER]: [
    'getDeliveries',
    'getAttachedDeliveries',
    'manageDeliveryState',
    'getUsers',
    'manageUsers'
  ],
  [Role.MANAGER]: []
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
