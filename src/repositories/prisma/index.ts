import { ClientRepository } from './ClientRepository';
import { ProductRepository } from './ProductRepository';
import { UserRepository } from './UserRepository';

const userRepository = new UserRepository();
const productRepository = new ProductRepository();
const clientRepository = new ClientRepository();

export {
  userRepository,
  productRepository,
  clientRepository,
};
