import { ProductType } from '../types/ProductType';

interface IProductService {
  create(product: ProductType): Promise<string>;
  readByUser(userId: string): Promise<ProductType[]>;
}

export { IProductService };
