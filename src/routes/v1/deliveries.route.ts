import express from 'express';
import { deliveryController } from '../../controllers';
import validate from '../../middlewares/validate';
import { deliveryValidation } from '../../validations';
import auth from '../../middlewares/auth';

const router = express.Router();

router
  .route('/item/:deliveryId')
  .get(
    auth('getDeliveries'),
    validate(deliveryValidation.deliveryId),
    deliveryController.getDeliveryById
  );
router
  .route('/item/:deliveryId/set-state')
  .patch(auth('getDeliveries'), deliveryController.setDeliveryState);
router
  .route('/item/:deliveryId/assign')
  .post(auth('getDeliveries'), deliveryController.attachDeliveryToUser);

router
  .route('/my')
  .get(auth('getAttachedDeliveries'), deliveryController.getDeliveriesOfCurrentUser);

router
  .route('/upcoming')
  .get(auth('getDeliveries'), deliveryController.getDeliveriesWithoutCourier);
router
  .route('/history')
  .get(auth('getAttachedDeliveries'), deliveryController.getCompletedUserDeliveries);

router.route('/search').get(auth(), deliveryController.getDeliveriesByQuery);

export default router;

/**
 * @swagger
 * tags:
 *   name: Deliveries
 *   description: Deliveries management and retrieval
 */

/**
 * @swagger
 * /item/:deliveryId:
 *    get:
 *      summary: Get delivery by Id
 *      tags: [Deliveries]
 *      security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /item/:deliveryId:/set-state:
 *    get:
 *      summary: Set delivery state
 *      tags: [Deliveries]
 *      security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /item/:deliveryId:/assign:
 *    get:
 *      summary: Assign with user
 *      tags: [Deliveries]
 *      security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /my:
 *  get:
 *    summary: Get assigned with user deliveries
 *    description: Get deliveries assigned with current user
 *    tags: [Deliveries]
 *    security:
 *       - bearerAuth: []
 *    responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /upcoming:
 *  get:
 *    summary: Get deliveries
 *    description: Get allowed for assign deliveries
 *    tags: [Deliveries]
 *    responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /history:
 *  get:
 *    summary: Get user history deliveries
 *    description: Get deliveries assigned with current user
 *    tags: [Deliveries]
 *    responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /search:
 *  get:
 *    summary: Get deliveries by query
 *    description: Get deliveries assigned with current user
 *    tags: [Deliveries]
 *    responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
