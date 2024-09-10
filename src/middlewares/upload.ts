import multer from 'multer';
import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import { UPLOADS_PATH } from '../config/uploads';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${UPLOADS_PATH}/`);
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

export const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(png|jpeg|jpg)$/)) {
      return callback(new ApiError(httpStatus.BAD_REQUEST, 'Please upload a Picture(PNG or JPEG)'));
    }
    callback(null, true);
  },
  storage
});
