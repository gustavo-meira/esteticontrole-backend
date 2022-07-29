import { ClientType } from '../types/ClientType';

interface IClientService {
  create(client: ClientType): Promise<string>;
  readByUser(userId: string): Promise<ClientType[]>;
  update(id: string, client: ClientType): Promise<ClientType>;
  delete(id: string, userId: string): Promise<ClientType>;
}

export { IClientService };
