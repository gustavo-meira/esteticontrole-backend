import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../services/IUserService';

class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;

    this.create = this.create.bind(this);
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
}

export { UserController };
