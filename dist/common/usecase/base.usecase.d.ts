import { IUsecase } from './i.usecase';
import { Model } from 'sequelize';
import { IRepository } from '../database';

export declare class BaseUsecase<M extends Model<M>, R extends IRepository<M>>
  implements IUsecase<M, R>
{
  protected readonly repository: R;
  constructor(repository: R);
  create(payload: Partial<Omit<M, keyof M>>): Promise<Model<M>>;
  deleteById(id: string): Promise<number>;
  getById(id: string): Promise<Model<M> | null>;
  update(
    id: string,
    payload: Partial<Omit<M, keyof M>>,
  ): Promise<Model<M> | null>;
}
