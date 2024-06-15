import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import { userService } from '../services';
import { UPLOADS_PATH } from '../config/uploads';

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);

  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.findUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const uploadAvatar = catchAsync(async (req, res) => {
  const host = `${req.protocol}://${req.get('host')}`;
  const user = await userService.updateUserById(req.params.userId, {
    avatar_src: `${host}/v1/${UPLOADS_PATH}/${req.file?.filename}`
  });
  res.send(user);
});

export default {
  getUsers,
  getUser,
  updateUser,
  uploadAvatar
};
