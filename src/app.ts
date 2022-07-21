import express, { Express } from 'express';

class App {
  public app: Express;

  constructor() {
    this.app = express();
  }

  public start(port: string | number): void {
    this.app.listen(port, () => {
      global.console.log(`[server]: running on port ${port}`);
    });
  }
}

export { App };
