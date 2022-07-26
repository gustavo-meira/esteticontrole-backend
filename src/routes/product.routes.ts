import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';
import { ValidateSchema } from '../middlewares/ValidateSchema';
import { VerifyToken } from '../middlewares/VerifyToken';
import { jwtProvider, uuidProvider } from '../providers';
import { productRepository } from '../repositories/prisma';
import { ProductCreateSchema } from '../schemas/ProductSchemas';
import { ProductService } from '../services/ProductService';

const productRouter = Router();
const verifyToken = new VerifyToken(jwtProvider);
const productService = new ProductService(
  productRepository,
  uuidProvider,
);
const productController = new ProductController(productService);
const validateProductCreate = new ValidateSchema(ProductCreateSchema);

productRouter.use(verifyToken.handle);

productRouter.post(
  '/',
  validateProductCreate.handle,
  productController.create,
);

productRouter.get(
  '/',
  productController.readByUser,
);

export { productRouter };
