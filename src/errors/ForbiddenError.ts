import { HttpErrorBase } from './HttpErrorBase';

class ForbiddenError extends HttpErrorBase {
  public readonly statusCode = 403;
}

export { ForbiddenError };
