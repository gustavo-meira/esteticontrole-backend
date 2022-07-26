import { ForbiddenError } from '../errors/ForbiddenError';
import { IHashProvider } from '../providers/interfaces/IHashProvider';
import { IJWTProvider } from '../providers/interfaces/IJWTProvider';
import { IUUIDProvider } from '../providers/interfaces/IUUIDProvider';
import { IUserRepository } from '../repositories/IUserRepository';
import { UserType } from '../types/UserType';
import { IUserService } from './IUserService';

class UserService implements IUserService {
  private userRepository: IUserRepository;
  private uuidProvider: IUUIDProvider;
  private jwtProvider: IJWTProvider;
  private hashProvider: IHashProvider;

  constructor(
    userRepository: IUserRepository,
    uuidProvider: IUUIDProvider,
    jwtProvider: IJWTProvider,
    hashProvider: IHashProvider,
  ) {
    this.userRepository = userRepository;
    this.uuidProvider = uuidProvider;
    this.jwtProvider = jwtProvider;
    this.hashProvider = hashProvider;
  }

  async create(user: UserType): Promise<string> {
    const id = this.uuidProvider.generate();
    const password = await this.hashProvider.hash(user.password);
    const userCreated = await this.userRepository.create({ ...user, id, password });

    const token = this.jwtProvider.generate({ id: userCreated.id });

    return token;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.readByEmail(email);

    if (!user) {
      throw new ForbiddenError('"email" or "password" invalid');
    }

    const isValidPassword = await this.hashProvider.compare(password, user.password);

    if (!isValidPassword) {
      throw new ForbiddenError('"email" or "password" invalid');
    }

    const token = this.jwtProvider.generate({ id: user.id });

    return token;
  }
}

export { UserService };
