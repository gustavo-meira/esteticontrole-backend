import Joi from 'joi';

const date = Joi.date().required();
const duration = Joi.number().required();
const paid = Joi.boolean().required();
const note = Joi.string().allow(null);
const clientId = Joi.string().required();
const productId = Joi.string().required();

const SchedulingCreateSchema = Joi.object().keys({
  date,
  duration,
  paid,
  note,
  clientId,
  productId,
});

export { SchedulingCreateSchema };
