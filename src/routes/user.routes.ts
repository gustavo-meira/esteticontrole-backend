import { Router } from 'express';
import { ValidateSchema } from '../middlewares/ValidateSchema';
import { UserRegisterSchema } from '../schemas/UserSchemas';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { hashPasswordProvider, jwtProvider, uuidProvider } from '../providers';
import { userRepository } from '../repositories/prisma';
import { ValidateDuplicateEmail } from '../middlewares/ValidateDuplicateEmail';

const userRouter = Router();
const userService = new UserService(
  userRepository,
  uuidProvider,
  jwtProvider,
  hashPasswordProvider,
);
const userController = new UserController(userService);
const validateUserRegister = new ValidateSchema(UserRegisterSchema);
const validateDuplicateEmail = new ValidateDuplicateEmail();

userRouter.post(
  '/register',
  validateUserRegister.handle,
  validateDuplicateEmail.handle,
  userController.create,
);

export { userRouter };
