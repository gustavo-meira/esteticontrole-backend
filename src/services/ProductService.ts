import { ForbiddenError } from '../errors/ForbiddenError';
import { NotFoundError } from '../errors/NotFoundError';
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

  async update(id: string, product: ProductType): Promise<ProductType> {
    const productFound = await this.productRepository.readOne(id);

    if (!productFound) {
      throw new NotFoundError('"product" not found');
    }

    if (productFound.userId !== product.userId) {
      throw new ForbiddenError('You are not allowed to update this product');
    }

    const productUpdated = await this.productRepository.update(id, product);

    return productUpdated;
  }
}

export { ProductService };
