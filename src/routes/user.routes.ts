import { Router } from 'express';
import { ValidateSchema } from '../middlewares/ValidateSchema';
import { UserRegisterSchema } from '../schemas/UserSchemas';
import { UserController } from '../controllers/UserController';
import { UserService } from '../services/UserService';
import { hashPasswordProvider, jwtProvider, uuidProvider } from '../providers';
import { userRepository } from '../repositories/prisma';

const userRouter = Router();
const userService = new UserService(
  userRepository,
  uuidProvider,
  jwtProvider,
  hashPasswordProvider,
);
const userController = new UserController(userService);
const validateUserRegister = new ValidateSchema(UserRegisterSchema);

userRouter.post('/register', validateUserRegister.handle, userController.create);

export { userRouter };
