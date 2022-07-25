import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../services/IUserService';

class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;

    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name } = req.body;

      const token = await this.userService.create({ email, password, name });

      res.status(201).json({ token });
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const token = await this.userService.login(email, password);

      res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }
}

export { UserController };
