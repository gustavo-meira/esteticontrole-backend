import { NextFunction, Request, Response } from 'express';
import { IProductService } from '../services/IProductService';

class ProductController {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;

    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;
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
