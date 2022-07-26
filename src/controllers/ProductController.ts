import { NextFunction, Request, Response } from 'express';
import { IProductService } from '../services/IProductService';

class ProductController {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;

    this.create = this.create.bind(this);
    this.readByUser = this.readByUser.bind(this);
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

  async readByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;

      const products = await this.productService.readByUser(userId);

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  }
}

export { ProductController };
