import { ProductType } from '../types/ProductType';

interface IProductService {
  create(product: ProductType): Promise<string>;
}

export { IProductService };
