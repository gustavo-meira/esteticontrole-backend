import { Router } from 'express';
import { SchedulingController } from '../controllers/SchedulingController';
import { jwtProvider, uuidProvider } from '../providers';
import { schedulingRepository } from '../repositories/prisma';
import { SchedulingService } from '../services/SchedulingService';
import { ValidateSchema } from '../middlewares/ValidateSchema';
import { SchedulingCreateSchema } from '../schemas/SchedulingSchemas';
import { VerifyToken } from '../middlewares/VerifyToken';

const schedulingRouter = Router();
const verifyToken = new VerifyToken(jwtProvider);
const schedulingService = new SchedulingService(
  schedulingRepository,
  uuidProvider,
);
const schedulingController = new SchedulingController(schedulingService);
const validateSchedulingCreate = new ValidateSchema(SchedulingCreateSchema);

schedulingRouter.use(verifyToken.handle);

schedulingRouter.post('/', validateSchedulingCreate.handle, schedulingController.create);

export { schedulingRouter };
