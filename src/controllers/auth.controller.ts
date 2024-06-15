import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { authService, userService, tokenService } from '../services';
import exclude from '../utils/exclude';
import { User } from '@prisma/client';

/*const register = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.createUser(email, password);
  const userWithoutPassword = exclude(user, ['password', 'createdAt', 'updatedAt']);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user: userWithoutPassword, tokens });
});*/

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token as string, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const getAuthorizedUserData = catchAsync(async (req, res) => {
  const user = req.user as User;
  const userData = await userService.findUserById(user.id);
  res.send(userData);
});

export default {
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  getAuthorizedUserData
};
