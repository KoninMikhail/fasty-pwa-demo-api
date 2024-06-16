import express from 'express';
import { subwayController } from '../../controllers';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth(), subwayController.getAllStationsList);

export default router;

/**
 * @swagger
 * tags:
 *   name: Subways
 *   description: Subways stations list
 */

/**
 * @swagger
 * /subways:
 *   get:
 *     summary: Get all
 *     description: Get a list of all subway stations
 *     tags: [Subways]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: A list of subway stations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubwayStation'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
