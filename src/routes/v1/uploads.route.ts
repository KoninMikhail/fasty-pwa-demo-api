import express from 'express';
import path from 'path';
import httpStatus from 'http-status';
import { UPLOADS_PATH } from '../../config/uploads';
import getImageMimetype from '../../utils/getImageMimetype';
import getFileExtension from '../../utils/getFileExtension';

const router = express.Router();

router.get('/:filename', (req, res) => {
  const { filename } = req.params;

  const fileExt = getFileExtension(filename);
  const filePath = path.join(__dirname, `../../../${UPLOADS_PATH}/`, filename);
  const mimetype = getImageMimetype(fileExt);

  if (!mimetype || mimetype === '') {
    return res.status(httpStatus.BAD_REQUEST).send();
  }

  res.setHeader('Content-Type', mimetype);

  return res.sendFile(filePath, (err) => {
    if (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  });
});

export default router;

/**
 * @swagger
 * tags:
 *   name: Uploads
 *   description: Get files by name
 */

/**
 * @swagger
 * /uploads/{filename}:
 *   get:
 *     summary: Request file by name
 *     tags: [Uploads]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *         - in: path
 *           name: filename
 *           required: true
 *           schema:
 *             type: string
 *           description: The filename of the file to request
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *             image/jpeg:
 *               schema:
 *                 type: string
 *                 format: binary
 *             image/png:
 *               schema:
 *                 type: string
 *                 format: binary
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
