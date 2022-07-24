import { UserType } from '../types/UserType';
import { IGenericRepository } from './IGenericRepository';

interface IUserRepository extends IGenericRepository<UserType> {}

export { IUserRepository };
