import Joi from 'joi';

const name = Joi.string().required();
const birthDate = Joi.date().required();
const telephone = Joi.string().length(11).required();
const recommendation = Joi.string().allow(null);

const clientCreateSchema = Joi.object().keys({
  name,
  birthDate,
  telephone,
  recommendation,
});

export { clientCreateSchema };
