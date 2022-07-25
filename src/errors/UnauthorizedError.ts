import { HttpErrorBase } from './HttpErrorBase';

class UnauthorizedError extends HttpErrorBase {
  public readonly statusCode = 401;
}

export { UnauthorizedError };
