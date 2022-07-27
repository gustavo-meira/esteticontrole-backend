import { NextFunction, Request, Response } from 'express';
import { IProductService } from '../services/IProductService';

class ProductController {
  private productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;

    this.create = this.create.bind(this);
    this.readByUser = this.readByUser.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
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

      const productsWithoutUser = products.map((product) => ({
        name: product.name,
        description: product.description,
        price: product.price,
        id: product.id,
      }));

      res.status(200).json(productsWithoutUser);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;
      const { id: productId } = req.params;
      const { name, price, description } = req.body;

      const { id } = await this.productService.update(productId, {
        name,
        price,
        description,
        userId,
      });

      res.status(200).json({
        name, description, price, id,
      });
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.user;
      const { id: productId } = req.params;

      const {
        name, description, price, id,
      } = await this.productService.delete(productId, userId);

      res.status(200).json({
        name, description, price, id,
      });
    } catch (err) {
      next(err);
    }
  }
}

export { ProductController };
