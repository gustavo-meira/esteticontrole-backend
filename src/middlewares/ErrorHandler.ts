import { NextFunction, Request, Response } from 'express';
import { HttpErrorBase } from '../errors/HttpErrorBase';

class ErrorHandler {
  constructor() {
    this.handle = this.handle.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handle(error: Error, _req: Request, res: Response, _next: NextFunction) {
    if (error instanceof HttpErrorBase) {
      res.status(error.statusCode).json({ message: error.message });
      return;
    }
    res.status(500).json({ error: error.message });
  }
}

const errorHandler = new ErrorHandler();

export { errorHandler };
