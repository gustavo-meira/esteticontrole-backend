import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IJWTProvider } from './interfaces/IJWTProvider';

class JWTProvider implements IJWTProvider {
  private secret = process.env.JWT_SECRET || 'secret';

  generate(payload: any): string {
    return jwt.sign(payload, this.secret, { expiresIn: '7 days' });
  }

  // eslint-disable-next-line class-methods-use-this
  decode<T>(token: string): T | null {
    return jwt.decode(token) as any;
  }
}

export { JWTProvider };
