import { NextFunction, Request, Response } from 'express';
import { IClientService } from '../services/IClientService';

class ClientController {
  private clientService: IClientService;

  constructor(clientService: IClientService) {
    this.clientService = clientService;

    this.create = this.create.bind(this);
    this.readByUser = this.readByUser.bind(this);
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

  public async readByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;

      const clients = await this.clientService.readByUser(userId);

      const clientsWithoutUser = clients.map((client) => ({
        name: client.name,
        birthDate: client.birthDate,
        telephone: client.telephone,
        recommendation: client.recommendation,
        id: client.id,
      }));

      res.status(200).json(clientsWithoutUser);
    } catch (err) {
      next(err);
    }
  }
}

export { ClientController };
