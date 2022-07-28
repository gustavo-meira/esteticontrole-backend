import { ClientType } from '../types/ClientType';
import { IGenericRepository } from './IGenericRepository';

interface IClientRepository extends IGenericRepository<ClientType> {

}

export { IClientRepository };
