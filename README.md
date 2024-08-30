# **Fasty.API - Backend service for rapid deployment of presentations using the [Fasty APP](https://github.com/KoninMikhail/fasty-package-delivery-courier-app)**

A boilerplate project for quickly building API using [Node.js](https://nodejs.org), [TypeScript](https://www.typescriptlang.org), [Express](https://expressjs.com), [MongoDB](https://www.mongodb.com/), and [Prisma ORM](https://www.prisma.io).

It includes all necessary data and features to create a fully functional production-ready demo API.
- all necessary data models
- authentication and authorization
- all app features
- reset demo data changes after timeout


## Contributing

Contributions are more than welcome! Please check out the [contributing guide](CONTRIBUTING.md).



## ATTENTION! ----------------- ATTENTION!

> *The code in this repository is undergoing improvement and isn't designed for complete beginners. If you need step-by-step instructions, this project might not be suitable for you. Please note that any questions about installation on your server, unrelated to bugs, will be ignored.*

---




## Quick Start

Clone the repo:

```bash
git clone --depth 1 https://github.com/KoninMikhail/fasty-pwa-demo-api.git
cd fasty-pwa-demo-api
npx rimraf ./.git
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

Start the server:

```bash
# if you are in development mode
yarn dev

# if you have installed pm2 && production mode
yarn start
```

## Table of Contents

- [Fasty.API Node Server Boilerplate](#fasty-api-node-server-boilerplate)
  - [Quick Start](#quick-start)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Commands](#commands)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure)
  - [API Documentation](#api-documentation)
    - [API Polices](#api-polices)
    - [API Endpoints](#api-endpoints)
  - [Error Handling](#error-handling)
  - [Validation](#validation)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Logging](#logging)
  - [Linting](#linting)
  - [Contributing](#contributing)
  - [Inspirations](#inspirations)
  - [License](#license)

## Features

- **NoSQL database**: [MongoDB](https://www.mongodb.com/) object data modeling using [Prisma](https://www.prisma.io) ORM
- **Authentication and authorization**: using [passport](http://www.passportjs.org)
- **Validation**: request data validation using [Joi](https://joi.dev)
- **Logging**: using [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan)
- **Error handling**: centralized error handling mechanism
- **API documentation**: with [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) and [swagger-ui-express](https://github.com/scottie1984/swagger-ui-express)
- **Process management**: advanced production process management using [PM2](https://pm2.keymetrics.io)
- **Dependency management**: with [Yarn](https://yarnpkg.com)
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv) and [cross-env](https://github.com/kentcdodds/cross-env#readme)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **Santizing**: sanitize request data against xss and query injection
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **Code coverage**: using [coveralls](https://coveralls.io)
- **Code quality**: with [Codacy](https://www.codacy.com)
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io)
- **Editor config**: consistent editor configuration using [EditorConfig](https://editorconfig.org)

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Database:

```bash
# push changes to db
yarn db:push

# start prisma studio
yarn db:studio

# reset demo data
yarn db:refresh
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# Frontend URL
# You can add multiple URLs separated by commas with no spaces
FRONTEND_URL=https://localhost:5173,localhost:6020

# URL of the MongoDb database at Atlas
DATABASE_URL="mongodb+srv://secret:*.mongodb.net/fastydb?retryWrites=true&w=majority&appName=FastyDB"

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Polices

- App has configured CORS polices to allow requests from the frontend URL.
- App has configured security HTTP headers using [helmet](https://helmetjs.github.io).

```JavaScript
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", ...config.frontendUrls],
        styleSrc: ["'self'", "'unsafe-inline'", ...config.frontendUrls],
        imgSrc: ["'self'", "data:", ...config.frontendUrls],
        connectSrc: ["'self'", ...config.frontendUrls],
        fontSrc: ["'self'", ...config.frontendUrls],
        objectSrc: ["'none'"],
        formAction: ["'self'"],
        frameAncestors: ["'self'"],
        mediaSrc: ["'self'", ...config.frontendUrls],
    }
  },
  crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  frameguard: { action: 'sameorigin' },
  hidePoweredBy: true,
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  ieNoOpen: true,
    noSniff: true,
  referrerPolicy: { policy: 'no-referrer' },
  xssFilter: true,
}));

```

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\

**User routes**:\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`GET /v1/users/me/profileData` - get current user profile\
`GET /v1/users//me/uploadAvatar` - upload avatar\

**Delivery routes**:\
`GET /v1/deliveries/item/:deliveryId` - get delivery by id\
`PATCH /v1/deliveries/item/:deliveryId/set-state` - set delivery state\
`POST /v1/deliveries/item/:deliveryId/assign` - assign delivery with me\
`GET /v1/deliveries/my` - get user deliveries\
`GET /v1/deliveries/history` - get user deliveries history\
`GET /v1/deliveries/upcoming` - get upcoming deliveries\
`GET /v1/deliveries/search` - search deliveries\
`GET /v1/deliveries/search/queries` - search query history\
`DELETE /v1/deliveries/queries/:queryForDelete` - remove query from history

**Subway routes**:\
`GET /v1/subways` - get all subways\

**Upload routes**:\
`GET /v1/uploads/:filename` - get uploaded file\

## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

```javascript
const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
```

The error handling middleware sends an error response, which has the following format:

```json
{
  "code": 404,
  "message": "Not found"
}
```

When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../services/user.service');

const getUser = async (userId) => {
  const user = await userService.findUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
```

## Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 30 minutes. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `JWT_REFRESH_EXPIRATION_DAYS` environment variable in the .env file.

## Authorization

The `auth` middleware can also be used to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth('manageUsers'), userController.createUser);
```

In the example above, an authenticated user can access this route only if that user has the `manageUsers` permission.

The permissions are role-based. You can view the permissions/rights of each role in the `src/config/roles.js` file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.

## Logging

Import the logger from `src/config/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```javascript
const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```

In development mode, log messages of all severity levels will be printed to the console.

In production mode, only `info`, `warn`, and `error` logs will be printed to the console.\
It is up to the server (or process manager) to actually read them from the console and store them in log files.\
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

## License

[MIT](LICENSE)
