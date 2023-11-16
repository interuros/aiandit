import { FindOptions, Model } from 'sequelize';

export interface IRepository<M extends Model<M>> {
  getById(id: string): Promise<M | null>;
  deleteById(id: string): Promise<number>;
  create(payload: Partial<Omit<M, keyof M>>): Promise<M>;
  update(id: string, payload: Partial<Omit<M, keyof M>>): Promise<M | null>;
  findAll(options?: FindOptions<M>): Promise<M[]>;
  findOne(options?: FindOptions<M>): Promise<M>;
}
