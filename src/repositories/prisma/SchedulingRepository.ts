import { PrismaClient } from '@prisma/client';
import { SchedulingType } from '../../types/SchedulingType';
import { ISchedulingRepository } from '../ISchedulingRepository';

class SchedulingRepository implements ISchedulingRepository {
  private prisma = new PrismaClient().scheduling;

  async read(): Promise<SchedulingType[]> {
    return this.prisma.findMany();
  }

  async readOne(id: string): Promise<SchedulingType | null> {
    return this.prisma.findFirst({ where: { id } });
  }

  async create(entity: SchedulingType): Promise<SchedulingType> {
    return this.prisma.create({ data: entity });
  }

  async update(id: string, entity: SchedulingType): Promise<SchedulingType> {
    return this.prisma.update({ where: { id }, data: entity });
  }

  async delete(id: string): Promise<SchedulingType> {
    return this.prisma.delete({ where: { id } });
  }
}

export { SchedulingRepository };
