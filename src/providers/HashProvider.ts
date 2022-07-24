import bcrypt from 'bcryptjs';
import { IHashProvider } from './interfaces/IHashProvider';

/* eslint-disable class-methods-use-this */
class HashProvider implements IHashProvider {
  async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(value, salt);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }
}

export { HashProvider };
