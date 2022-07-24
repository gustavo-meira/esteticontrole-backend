import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

class ValidateSchema {
  private schema: ObjectSchema;

  constructor(schema: ObjectSchema) {
    this.schema = schema;
    this.handle = this.handle.bind(this);
  }

  handle(req: Request, res: Response, next: NextFunction) {
    const { error } = this.schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return next();
  }
}

export { ValidateSchema };
