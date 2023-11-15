import { Model } from 'sequelize';
import { IRepository } from '../database';

export interface IUsecase<
  M extends Model<M>,
  R extends IRepository<M> = IRepository<M>,
> {
  getById(id: string): Promise<Model<M> | null>;
  deleteById(id: string): Promise<number>;
  create(payload: Partial<Omit<M, keyof M>>): Promise<Model<M>>;
  update(
    id: string,
    payload: Partial<Omit<M, keyof M>>,
  ): Promise<Model<M> | null>;
}
