import { Router } from 'express';
import { ValidateSchema } from '../middlewares/ValidateSchema';
import { clientCreateSchema } from '../schemas/ClientSchemas';
import { VerifyToken } from '../middlewares/VerifyToken';
import { jwtProvider, uuidProvider } from '../providers';
import { ClientService } from '../services/ClientService';
import { clientRepository } from '../repositories/prisma';
import { ClientController } from '../controllers/ClientController';

const clientRouter = Router();

const clientService = new ClientService(clientRepository, uuidProvider);
const clientController = new ClientController(clientService);
const validateClientCreate = new ValidateSchema(clientCreateSchema);
const verifyToken = new VerifyToken(jwtProvider);

clientRouter.use(verifyToken.handle);

clientRouter.post(
  '/',
  validateClientCreate.handle,
  clientController.create,
);

clientRouter.get(
  '/',
  clientController.readByUser,
);

export { clientRouter };
