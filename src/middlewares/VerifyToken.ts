import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../errors/UnauthorizedError';
import { IJWTProvider } from '../providers/interfaces/IJWTProvider';

class VerifyToken {
  private jwtProvider: IJWTProvider;

  constructor(jwtProvider: IJWTProvider) {
    this.jwtProvider = jwtProvider;

    this.handle = this.handle.bind(this);
  }

  handle(req: Request, _res: Response, next: NextFunction) {
    const { authorization: token } = req.headers;

    if (!token) {
      throw new UnauthorizedError('"token" is required');
    }

    const user = this.jwtProvider.decode<{ id: string }>(token);

    if (!user) {
      throw new UnauthorizedError('"token" is invalid or expired');
    }

    req.user = user;

    next();
  }
}

export { VerifyToken };
