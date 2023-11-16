import { FindOptions, Model } from 'sequelize';
import { IRepository } from '../database';

export interface IUsecase<
  M extends Model<M>,
  R extends IRepository<M> = IRepository<M>,
> {
  getById(id: string): Promise<M>;
  deleteById(id: string): Promise<number>;
  create(payload: Partial<Omit<M, keyof M>>): Promise<M>;
  update(id: string, payload: Partial<Omit<M, keyof M>>): Promise<M>;
  findAll(options?: FindOptions<M>): Promise<M[]>;
  findOne(options?: FindOptions<M>): Promise<M>;
}
