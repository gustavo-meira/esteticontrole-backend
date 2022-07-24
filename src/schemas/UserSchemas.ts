import Joi from 'joi';

const UserRegisterSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export { UserRegisterSchema };
