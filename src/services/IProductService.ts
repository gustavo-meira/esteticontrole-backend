import { ProductType } from '../types/ProductType';

interface IProductService {
  create(product: ProductType): Promise<string>;
  readByUser(userId: string): Promise<ProductType[]>;
  update(id: string, product: ProductType): Promise<ProductType>;
  delete(id: string, userId: string): Promise<ProductType>;
}

export { IProductService };
