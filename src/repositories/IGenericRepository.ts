interface IGenericRepository<T> {
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null>;
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  delete(id: string): Promise<T>;
}

export { IGenericRepository };
