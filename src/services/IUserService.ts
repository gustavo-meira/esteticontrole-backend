import { UserType } from '../types/UserType';

interface IUserService {
  create(user: UserType): Promise<string>;
}

export { IUserService };
