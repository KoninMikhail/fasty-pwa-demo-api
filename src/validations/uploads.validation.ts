import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
const Joi = JoiImport.extend(DateExtension);

const filenameRegex = /^[^<>:"/\\|?*\x00-\x1F]+$/;

const filename = {
  params: Joi.object().keys({
    filename: Joi.string().regex(filenameRegex).messages({
      'string.pattern.base': 'Filename contains invalid characters.'
    })
  })
};
export default {
  filename
};
