import express from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import docsRoute from './docs.route';
import subwayRoute from './subways.route';
import config from '../../config/config';
import deliveriesRoute from './deliveries.route';
import uploads from './uploads.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute
  },
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/deliveries',
    route: deliveriesRoute
  },
  {
    path: '/subways',
    route: subwayRoute
  },
  {
    path: '/uploads',
    route: uploads
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;
