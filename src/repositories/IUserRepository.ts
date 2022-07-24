import { UserType } from '../types/UserType';
import { IGenericRepository } from './IGenericRepository';

interface IUserRepository extends IGenericRepository<UserType> {
  readByEmail(email: string): Promise<UserType | null>;
}

export { IUserRepository };
