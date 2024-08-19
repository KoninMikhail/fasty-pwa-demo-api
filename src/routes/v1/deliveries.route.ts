import express from 'express';
import { deliveryController } from '../../controllers';
import validate from '../../middlewares/validate';
import { deliveryValidation, searchValidation } from '../../validations';
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
  .patch(
    auth('updateAssignedDeliveries'),
    validate(deliveryValidation.setState),
    deliveryController.setDeliveryState
  );
router
  .route('/item/:deliveryId/assign')
  .post(
    auth('assignDeliveries'),
    validate(deliveryValidation.deliveryId),
    deliveryController.attachDeliveryToUser
  );

router
  .route('/upcoming')
  .get(
    auth('getDeliveries'),
    validate(deliveryValidation.getDeliveriesList),
    deliveryController.getUnassignedDeliveries
  );

router
  .route('/my')
  .get(
    auth('getSelfDeliveries'),
    validate(deliveryValidation.getDeliveriesList),
    deliveryController.getCourierDeliveries
  );
router
  .route('/history')
  .get(
    auth('getSelfDeliveries'),
    validate(deliveryValidation.getDeliveriesList),
    deliveryController.getCourierHistoryDeliveries
  );

router
  .route('/search')
  .get(
    auth('getDeliveries'),
    validate(searchValidation.query),
    deliveryController.getDeliveriesByQuery
  );
router
  .route('/search/queries')
  .get(auth('getDeliveries'), deliveryController.getQueryHistory)
  .delete(
    auth('getDeliveries'),
    validate(searchValidation.deleteQuery),
    deliveryController.removeQueryHistoryItem
  );

export default router;

/**
 * @swagger
 * tags:
 *   name: Deliveries
 *   description: Deliveries management and retrieval
 */

/**
 * @swagger
 * /item/{deliveryId}:
 *   get:
 *     summary: Get delivery by Id
 *     tags: [Deliveries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deliveryId
 *         required: true
 *         schema:
 *           type: string
 *         description: Delivery id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /item/{deliveryId}/set-state:
 *   patch:
 *     summary: Set delivery state
 *     tags: [Deliveries]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *      - in: path
 *        name: deliveryId
 *        required: true
 *        schema:
 *          type: string
 *        description: Delivery id
 *      - in: body
 *        name: state
 *        required: true
 *        schema:
 *          type: string
 *          enum: [created, delivering, canceled, done]
 *        description: Delivery state
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 */

/**
 * @swagger
 * /item/{deliveryId}/assign:
 *   post:
 *     summary: Assign with user
 *     tags: [Deliveries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deliveryId
 *         required: true
 *         schema:
 *           type: string
 *         description: Delivery id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /my:
 *   get:
 *     summary: Get assigned with user deliveries
 *     description: Get deliveries assigned with current user
 *     tags: [Deliveries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: express
 *         schema:
 *           type: boolean
 *           default: undefined
 *         description: only express deliveries
 *       - in: query
 *         name: car
 *         schema:
 *           type: boolean
 *           default: undefined
 *         description: only car deliveries
 *       - in: query
 *         name: dateFrom
 *         schema:
 *           type: string
 *           format: date
 *         description: exclude deliveries before this date
 *         example: 2021-01-01
 *       - in: query
 *         name: dateTo
 *         schema:
 *           type: string
 *           format: date
 *         description: exclude deliveries after this date
 *         example: 2021-01-01
 *       - in: query
 *         name: weightMin
 *         schema:
 *           type: number
 *         description: exclude deliveries with weight less than this
 *         example: 1
 *       - in: query
 *         name: weightMax
 *         schema:
 *           type: number
 *         description: exclude deliveries with weight more than this
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 10
 *         description: Maximum number of deliveries
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /upcoming:
 *   get:
 *     summary: Get deliveries
 *     description: Get allowed for assign deliveries
 *     tags: [Deliveries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: express
 *         schema:
 *           type: boolean
 *           default: undefined
 *         description: only express deliveries
 *       - in: query
 *         name: car
 *         schema:
 *           type: boolean
 *           default: undefined
 *         description: only car deliveries
 *       - in: query
 *         name: dateFrom
 *         schema:
 *           type: string
 *           format: date
 *         description: exclude deliveries before this date
 *         example: 2021-01-01
 *       - in: query
 *         name: dateTo
 *         schema:
 *           type: string
 *           format: date
 *         description: exclude deliveries after this date
 *         example: 2021-01-01
 *       - in: query
 *         name: weightMin
 *         schema:
 *           type: number
 *         description: exclude deliveries with weight less than this
 *         example: 1
 *       - in: query
 *         name: weightMax
 *         schema:
 *           type: number
 *         description: exclude deliveries with weight more than this
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 10
 *         description: Maximum number of deliveries
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Delivery'
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
 *    description: Get user history deliveries
 *    tags: [Deliveries]
 *    parameters:
 *      - in: query
 *        name: express
 *        schema:
 *          type: boolean
 *          default: undefined
 *        description: only express deliveries
 *      - in: query
 *        name: car
 *        schema:
 *          type: boolean
 *          default: undefined
 *        description: only car deliveries
 *      - in: query
 *        name: dateFrom
 *        schema:
 *          type: string
 *          format: date
 *        description: exclude deliveries before this date
 *        example: 2021-01-01
 *      - in: query
 *        name: dateTo
 *        schema:
 *          type: string
 *          format: date
 *        description: exclude deliveries after this date
 *        example: 2021-01-01
 *      - in: query
 *        name: weightMin
 *        schema:
 *          type: number
 *        description: exclude deliveries with weight less than this
 *        example: 1
 *      - in: query
 *        name: weightMax
 *        schema:
 *          type: number
 *        description: exclude deliveries with weight more than this
 *        example: 1
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *          minimum: 1
 *          default: 10
 *        description: Maximum number of deliveries
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *          minimum: 1
 *          default: 1
 *        description: Page number
 *    responses:
 *      "200":
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Delivery'
 *      "401":
 *        $ref: '#/components/responses/Unauthorized'
 *      "403":
 *        $ref: '#/components/responses/Forbidden'
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
