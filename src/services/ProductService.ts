import { IUUIDProvider } from '../providers/interfaces/IUUIDProvider';
import { IProductRepository } from '../repositories/IProductRepository';
import { ProductType } from '../types/ProductType';
import { IProductService } from './IProductService';

class ProductService implements IProductService {
  private productRepository: IProductRepository;
  private uuidProvider: IUUIDProvider;

  constructor(
    productRepository: IProductRepository,
    uuidProvider: IUUIDProvider,
  ) {
    this.productRepository = productRepository;
    this.uuidProvider = uuidProvider;
  }

  async create(product: ProductType): Promise<string> {
    const id = this.uuidProvider.generate();

    const productCreated = await this.productRepository.create({ ...product, id });

    return productCreated.id as string;
  }

  async readByUser(userId: string): Promise<ProductType[]> {
    const products = await this.productRepository.readByUser(userId);

    return products;
  }
}

export { ProductService };
