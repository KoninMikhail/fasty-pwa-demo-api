import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
import { DeliveryState } from '@prisma/client';
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

const setState = {
  body: Joi.object().keys({
    state: Joi.string()
      .valid(
        DeliveryState.created,
        DeliveryState.delivering,
        DeliveryState.done,
        DeliveryState.canceled
      )
      .required()
      .messages({
        'any.required': 'State is required',
        'string.base': 'State must be a string',
        'any.only': 'State must be done or canceled'
      }),
    comment: Joi.string().allow(null).allow('').messages({
      'string.base': 'Comment must be a string'
    })
  })
};

const getDeliveriesList = {
  query: Joi.object().keys({
    dateFrom: Joi.date().format('YYYY-MM-DD').messages({
      'date.base': 'Date from must be a date in format YYYY-MM-DD'
    }),
    dateTo: Joi.date().format('YYYY-MM-DD').messages({
      'date.base': 'Date to must be a date in format YYYY-MM-DD'
    }),
    express: Joi.boolean().messages({
      'boolean.base': 'Express must be a boolean'
    }),
    car: Joi.boolean().messages({
      'boolean.base': 'Car must be a boolean'
    }),
    weightMin: Joi.number().integer().min(0).messages({
      'number.base': 'WeightMin must be a number',
      'number.integer': 'Weight min must be an integer',
      'number.min': 'Weight min must be at least 0'
    }),
    weightMax: Joi.number().integer().max(150).messages({
      'number.base': 'WeightMax must be a number',
      'number.integer': 'Weight max must be an integer',
      'number.min': 'Weight max must be lower or equal than 150'
    }),
    limit: Joi.number().integer().min(1).max(100).messages({
      'number.base': 'Limit must be a number',
      'number.integer': 'Limit must be an integer',
      'number.min': 'Limit must be at least 1',
      'number.max': 'Limit must be at most 100'
    }),
    page: Joi.number().integer().min(1).messages({
      'number.base': 'Page must be a number',
      'number.integer': 'Page must be an integer',
      'number.min': 'Page must be at least 1'
    }),
    sortBy: Joi.string().valid('date', 'weight', 'deliveryId').messages({
      'string.base': 'Sort by must be a string',
      'any.only': 'Sort by must be date or weight'
    }),
    sortType: Joi.string().valid('asc', 'desc').messages({
      'string.base': 'Sort type must be a string',
      'any.only': 'Sort type must be asc or desc'
    })
  })
};

export default {
  deliveryId,
  setState,
  getDeliveriesList
};
