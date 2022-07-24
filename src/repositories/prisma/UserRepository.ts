import { PrismaClient } from '@prisma/client';
import { UserType } from '../../types/UserType';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private prisma = new PrismaClient().user;

  async read(): Promise<UserType[]> {
    return this.prisma.findMany();
  }

  async readOne(id: string): Promise<UserType | null> {
    return this.prisma.findUnique({ where: { id } });
  }

  async create(entity: UserType): Promise<UserType> {
    return this.prisma.create({ data: entity });
  }

  async update(id: string, entity: UserType): Promise<UserType> {
    return this.prisma.update({ where: { id }, data: entity });
  }

  async delete(id: string): Promise<UserType> {
    return this.prisma.delete({ where: { id } });
  }
}

export { UserRepository };
