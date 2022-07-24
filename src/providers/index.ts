import { HashProvider } from './HashProvider';
import { JWTProvider } from './JWTProvider';
import { UUIDProvider } from './UUIDProvider';

const hashPasswordProvider = new HashProvider();
const jwtProvider = new JWTProvider();
const uuidProvider = new UUIDProvider();

export {
  hashPasswordProvider,
  jwtProvider,
  uuidProvider,
};
