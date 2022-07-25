import { ProductRepository } from './ProductRepository';
import { UserRepository } from './UserRepository';

const userRepository = new UserRepository();
const productRepository = new ProductRepository();

export {
  userRepository,
  productRepository,
};
