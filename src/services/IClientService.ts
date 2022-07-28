import { ClientType } from '../types/ClientType';

interface IClientService {
  create(client: ClientType): Promise<string>;
}

export { IClientService };
