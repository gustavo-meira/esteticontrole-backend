import { v4 as uuidv4 } from 'uuid';
import { IUUIDProvider } from './IUUIDProvider';

class UUIDProvider implements IUUIDProvider {
  private uuid = uuidv4;

  generate(): string {
    return this.uuid();
  }
}

export { UUIDProvider };
