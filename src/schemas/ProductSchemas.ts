import Joi from 'joi';

const name = Joi.string().required();
const price = Joi.number().required();
const description = Joi.string().allow(null);

const ProductCreateSchema = Joi.object().keys({
  name,
  price,
  description,
});

export { ProductCreateSchema };
