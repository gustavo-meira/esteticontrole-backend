import { UserType } from '../types/UserType';

interface IUserService {
  create(user: UserType): Promise<string>;
  login(email: string, password: string): Promise<string>;
}

export { IUserService };
