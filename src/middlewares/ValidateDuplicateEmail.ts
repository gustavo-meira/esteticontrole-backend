import { NextFunction, Request, Response } from 'express';
import { IUserRepository } from '../repositories/IUserRepository';
import { UserRepository } from '../repositories/prisma/UserRepository';

class ValidateDuplicateEmail {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.handle = this.handle.bind(this);
  }

  async handle(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const user = await this.userRepository.readByEmail(email);

    if (!user) {
      next();
      return;
    }

    res.status(409).json({ message: '"email" already in use' });
  }
}

export { ValidateDuplicateEmail };
