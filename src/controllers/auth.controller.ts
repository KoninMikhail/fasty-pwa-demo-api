import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import { authService, systemService, tokenService } from '../services';

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const systemAvailable = await systemService.getServerAvailability();
  if (!systemAvailable) {
    res.status(httpStatus.SERVICE_UNAVAILABLE).send('Service is unavailable');
  } else {
    const user = await authService.loginUserWithEmailAndPassword(email, password);
    const tokens = await tokenService.generateAuthTokens(user);
    res.send({ user, tokens });
  }
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.sendStatus(httpStatus.NO_CONTENT);
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  res.sendStatus(httpStatus.NO_CONTENT);
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token as string, req.body.password);
  res.sendStatus(httpStatus.NO_CONTENT);
});

export default {
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword
};
