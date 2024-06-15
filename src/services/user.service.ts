import { User, Role, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import prisma from '../client';
import ApiError from '../utils/ApiError';

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
const createUser = async (
  email: string,
  password: string,
  name?: string,
  role: Role = Role.MANAGER
): Promise<User> => {
  if (await findUserByEmail(email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return prisma.user.create({
    data: {
      email,
      name,
      password: await encryptPassword(password),
      role
    }
  });
};*/

/**
 * Query for users
 * @param {Object} filter - Prisma filter
 * @param {Object} options - Query options
 * @param keys
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async <Key extends keyof User>(
  filter: object,
  options: {
    limit?: number;
    page?: number;
    sortBy?: string;
    sortType?: 'asc' | 'desc';
  },
  keys: Key[] = [
    'id',
    'email',
    'firstName',
    'lastName',
    'password',
    'role',
    'avatar_src',
    'createdAt',
    'updatedAt'
  ] as Key[]
): Promise<Pick<User, Key>[]> => {
  const page = options.page ?? 1;
  const limit = options.limit ?? 10;
  const sortBy = options.sortBy;
  const sortType = options.sortType ?? 'desc';
  const users = await prisma.user.findMany({
    where: filter,
    select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
    skip: page > 1 ? page * limit : 0,
    take: limit,
    orderBy: sortBy ? { [sortBy]: sortType } : undefined
  });
  return users as Pick<User, Key>[];
};

/**
 * Get user by id
 * @param {string} id
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<User, Key> | null>}
 */
const findUserById = async <Key extends keyof User>(
  id: string,
  keys: Key[] = [
    'id',
    'email',
    'firstName',
    'lastName',
    'role',
    'gender',
    'active',
    'language',
    'avatar_src',
    'phone'
  ] as Key[]
): Promise<Pick<User, Key> | null> => {
  return prisma.user.findUnique({
    where: { id },
    select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
  }) as Promise<Pick<User, Key> | null>;
};

/**
 * Get user by email
 * @param {string} email
 * @param {Array<Key>} keys
 * @returns {Promise<Pick<User, Key> | null>}
 */
const findUserByEmail = async <Key extends keyof User>(
  email: string,
  keys: Key[] = [
    'id',
    'email',
    'firstName',
    'lastName',
    'role',
    'gender',
    'active',
    'language',
    'avatar_src',
    'phone'
  ] as Key[]
): Promise<Pick<User, Key> | null> => {
  return prisma.user.findUnique({
    where: { email },
    select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
  }) as Promise<Pick<User, Key> | null>;
};

/**
 * Update user by id
 * @param {string} userId
 * @param {Object} updateBody
 * @param keys
 * @returns {Promise<User>}
 */
const updateUserById = async <Key extends keyof User>(
  userId: string,
  updateBody: Prisma.UserUpdateInput,
  keys: Key[] = [
    'id',
    'email',
    'firstName',
    'lastName',
    'role',
    'gender',
    'active',
    'language',
    'avatar_src',
    'phone'
  ] as Key[]
): Promise<Pick<User, Key> | null> => {
  const user = await findUserById(userId, ['id', 'email', 'firstName', 'lastName']);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await findUserByEmail(updateBody.email as string))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: updateBody,
    select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {})
  });
  return updatedUser as Pick<User, Key> | null;
};

export default {
  queryUsers,
  findUserById,
  updateUserById,
  findUserByEmail
};
