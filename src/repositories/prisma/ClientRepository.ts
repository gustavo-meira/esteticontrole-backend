import { PrismaClient } from '@prisma/client';
import { ClientType } from '../../types/ClientType';
import { IClientRepository } from '../IClientRepository';

class ClientRepository implements IClientRepository {
  private prisma = new PrismaClient().client;

  read(): Promise<ClientType[]> {
    return this.prisma.findMany();
  }

  readOne(id: string): Promise<ClientType | null> {
    return this.prisma.findFirst({ where: { id } });
  }

  create(entity: ClientType): Promise<ClientType> {
    return this.prisma.create({ data: entity });
  }

  update(id: string, entity: ClientType): Promise<ClientType> {
    return this.prisma.update({ where: { id }, data: entity });
  }

  delete(id: string): Promise<ClientType> {
    return this.prisma.delete({ where: { id } });
  }
}

export { ClientRepository };
