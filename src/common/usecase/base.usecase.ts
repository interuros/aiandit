import { IUsecase } from './i.usecase';
import { Model } from 'sequelize';
import { IRepository } from '../database';

export class BaseUsecase<M extends Model<M>, R extends IRepository<M>>
  implements IUsecase<M, R>
{
  protected static _instance;

  constructor(protected readonly repository: R) {}

  create(payload: Partial<Omit<M, keyof M>>): Promise<Model<M>> {
    console.log(Object.keys(this.repository));
    return this.repository.create(payload);
  }

  deleteById(id: string): Promise<number> {
    return this.repository.deleteById(id);
  }

  getById(id: string): Promise<Model<M> | null> {
    return this.repository.getById(id);
  }

  update(
    id: string,
    payload: Partial<Omit<M, keyof M>>,
  ): Promise<Model<M> | null> {
    return this.repository.update(id, payload);
  }

  static instance(service, ...args) {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new service(...args);
    return this._instance;
  }
}
