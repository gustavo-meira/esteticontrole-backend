import { ClientRepository } from './ClientRepository';
import { ProductRepository } from './ProductRepository';
import { SchedulingRepository } from './SchedulingRepository';
import { UserRepository } from './UserRepository';

const userRepository = new UserRepository();
const productRepository = new ProductRepository();
const clientRepository = new ClientRepository();
const schedulingRepository = new SchedulingRepository();

export {
  userRepository,
  productRepository,
  clientRepository,
  schedulingRepository,
};
