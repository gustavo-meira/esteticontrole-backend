import { NextFunction, Request, Response } from 'express';
import { ISchedulingService } from '../services/ISchedulingService';

class SchedulingController {
  private schedulingService: ISchedulingService;

  constructor(schedulingService: ISchedulingService) {
    this.schedulingService = schedulingService;

    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;
      const {
        date, duration, paid, note, clientId, productId,
      } = req.body;

      const schedulingId = await this.schedulingService.create({
        date,
        duration,
        paid,
        note,
        userId,
        clientId,
        productId,
      });

      res.status(201).json({ id: schedulingId });
    } catch (err) {
      next(err);
    }
  }
}

export { SchedulingController };
