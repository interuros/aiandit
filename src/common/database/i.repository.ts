import { Model } from 'sequelize';

export interface IRepository<M extends Model<M>> {
  getById(id: string): Promise<Model<M> | null>;
  deleteById(id: string): Promise<number>;
  create(payload: Partial<Omit<M, keyof M>>): Promise<Model<M>>;
  update(
    id: string,
    payload: Partial<Omit<M, keyof M>>,
  ): Promise<Model<M> | null>;
}
