import jwt from 'jsonwebtoken';
import { IJWTProvider } from './interfaces/IJWTProvider';

class JWTProvider implements IJWTProvider {
  private secret = process.env.JWT_SECRET as string;

  generate(payload: any): string {
    return jwt.sign(payload, this.secret);
  }

  // eslint-disable-next-line class-methods-use-this
  decode<T>(token: string): T {
    return jwt.decode(token) as any;
  }
}

export { JWTProvider };
