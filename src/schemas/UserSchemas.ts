import Joi from 'joi';

const name = Joi.string().min(3).max(30).required();
const email = Joi.string().email().required();
const password = Joi.string().min(6).max(30).required();

const UserRegisterSchema = Joi.object().keys({
  name,
  email,
  password,
});

const UserLoginSchema = Joi.object().keys({
  email,
  password,
});

export { UserRegisterSchema, UserLoginSchema };
