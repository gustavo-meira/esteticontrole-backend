import { IUUIDProvider } from '../providers/interfaces/IUUIDProvider';
import { IClientRepository } from '../repositories/IClientRepository';
import { ClientType } from '../types/ClientType';
import { IClientService } from './IClientService';

class ClientService implements IClientService {
  private clientRepository: IClientRepository;
  private uuidProvider: IUUIDProvider;

  constructor(
    clientRepository: IClientRepository,
    uuidProvider: IUUIDProvider,
  ) {
    this.clientRepository = clientRepository;
    this.uuidProvider = uuidProvider;
  }

  public async create(client: ClientType): Promise<string> {
    const id = this.uuidProvider.generate();

    const birthDate = new Date(client.birthDate);

    const clientCreated = await this.clientRepository.create({ ...client, id, birthDate });

    return clientCreated.id as string;
  }

  public async readByUser(userId: string): Promise<ClientType[]> {
    const clients = await this.clientRepository.readByUser(userId);

    return clients;
  }
}

export { ClientService };
