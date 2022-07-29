import { ClientType } from '../types/ClientType';

interface IClientService {
  create(client: ClientType): Promise<string>;
  readByUser(userId: string): Promise<ClientType[]>;
}

export { IClientService };
