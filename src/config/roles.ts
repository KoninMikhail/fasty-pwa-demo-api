import { Role } from '@prisma/client';

const allRoles = {
  [Role.COURIER]: [
    'getDeliveries',
    'getSelfDeliveries',
    'assignDeliveries',
    'updateAssignedDeliveries',
    'getUsers',
    'getSelfAccount',
    'updateSelfAccount',
    'uploadFiles'
  ],
  [Role.MANAGER]: []
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));
