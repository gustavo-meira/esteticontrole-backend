import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../interfaces/RequestInterfaces';
import { IProductService } from '../services/IProductService';

class ProductController {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;

    this.create = this.create.bind(this);
  }

  async create(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user as { id: string };
      const { name, price, description } = req.body;

      const productId = await this.productService.create({
        name,
        price,
        description,
        userId,
      });

      res.status(201).json({ id: productId });
    } catch (err) {
      next(err);
    }
  }
}

export { ProductController };
