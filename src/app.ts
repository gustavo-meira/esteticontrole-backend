import express, { Express } from 'express';
import cors from 'cors';
import { userRouter } from './routes/user.routes';
import { errorHandler } from './middlewares/ErrorHandler';
import { productRouter } from './routes/product.routes';
import { clientRouter } from './routes/client.routes';

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/users', userRouter);
    this.app.use('/products', productRouter);
    this.app.use('/clients', clientRouter);
    this.app.use(errorHandler.handle);
  }

  public start(port: string | number): void {
    this.app.listen(port, () => {
      global.console.log(`[server]: running on port ${port}`);
    });
  }
}

export { App };
