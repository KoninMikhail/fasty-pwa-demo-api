import catchAsync from '../utils/catchAsync';
import getFileExtension from '../utils/getFileExtension';
import path from 'path';
import { UPLOADS_PATH } from '../config/uploads';
import getImageMimetype from '../utils/getImageMimetype';
import httpStatus from 'http-status';

const getUpload = catchAsync((req, res) => {
  const { filename } = req.params;

  const fileExt = getFileExtension(filename);
  const filePath = path.join(__dirname, `../../${UPLOADS_PATH}/`, filename);
  const mimetype = getImageMimetype(fileExt);

  if (!mimetype || mimetype === '') {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  res.setHeader('Content-Type', mimetype);

  return res.sendFile(filePath, (err) => {
    if (err) {
      res.sendStatus(httpStatus.NOT_FOUND);
    }
  });
});

export default {
  getUpload
};
