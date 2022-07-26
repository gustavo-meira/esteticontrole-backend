import { PrismaClient } from '@prisma/client';
import { ProductType } from '../../types/ProductType';
import { IProductRepository } from '../IProductRepository';

class ProductRepository implements IProductRepository {
  private prisma = new PrismaClient().product;

  async read(): Promise<ProductType[]> {
    return this.prisma.findMany();
  }

  async readOne(id: string): Promise<ProductType | null> {
    return this.prisma.findUnique({ where: { id } });
  }

  async create(entity: ProductType): Promise<ProductType> {
    return this.prisma.create({ data: entity });
  }

  async update(id: string, entity: ProductType): Promise<ProductType> {
    return this.prisma.update({ where: { id }, data: entity });
  }

  async delete(id: string): Promise<ProductType> {
    return this.prisma.delete({ where: { id } });
  }

  async readByUser(userId: string): Promise<ProductType[]> {
    return this.prisma.findMany({ where: { userId } });
  }
}

export { ProductRepository };
