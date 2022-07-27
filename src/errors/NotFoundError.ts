import { HttpErrorBase } from './HttpErrorBase';

class NotFoundError extends HttpErrorBase {
  public readonly statusCode = 404;
}

export { NotFoundError };
