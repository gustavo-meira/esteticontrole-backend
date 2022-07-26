import { ProductType } from '../types/ProductType';
import { IGenericRepository } from './IGenericRepository';

interface IProductRepository extends IGenericRepository<ProductType> {
  readByUser(userId: string): Promise<ProductType[]>;
}

export { IProductRepository };
