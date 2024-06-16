import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
const Joi = JoiImport.extend(DateExtension);

const deliveryId = {
  params: Joi.object().keys({
    deliveryId: Joi.string().required().min(24).max(24).messages({
      'any.required': 'Delivery ID is required',
      'string.base': 'Delivery ID must be a string',
      'string.min': 'Delivery ID must be 24 characters long',
      'string.max': 'Delivery ID must be 24 characters long'
    })
  })
};
export default {
  deliveryId
};
