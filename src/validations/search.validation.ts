import Joi from 'joi';

const query = Joi.object().keys({
  query: Joi.string().required().messages({
    'any.required': 'Query is required',
    'string.base': 'Query must be a string'
  })
});

const deleteQuery = Joi.object().keys({
  params: Joi.object().keys({
    queryForDelete: Joi.string().required().min(1).messages({
      'any.required': 'Query is required',
      'string.base': 'Query must be a string',
      'string.min': 'Query must be at least 1 character long'
    })
  })
});

export default {
  query,
  deleteQuery
};
