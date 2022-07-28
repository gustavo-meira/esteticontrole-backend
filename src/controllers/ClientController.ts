import { NextFunction, Request, Response } from 'express';
import { IClientService } from '../services/IClientService';

class ClientController {
  private clientService: IClientService;

  constructor(clientService: IClientService) {
    this.clientService = clientService;

    this.create = this.create.bind(this);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;
      const {
        name, birthDate, telephone, recommendation,
      } = req.body;

      const id = await this.clientService.create({
        name,
        birthDate,
        telephone,
        recommendation,
        userId,
      });

      res.status(201).json({ id });
    } catch (err) {
      next(err);
    }
  }
}

export { ClientController };
