import { IRepository } from './i.repository';
import { Model, ModelCtor } from 'sequelize';
import { CreationAttributes } from 'sequelize/types/model';

export declare abstract class BaseRepository<M extends Model<M>>
  implements IRepository<M>
{
  private readonly model;
  constructor(model: ModelCtor<M>);
  create(payload: CreationAttributes<M>): Promise<Model<M>>;
  deleteById(id: any): Promise<number>;
  getById(id: string): Promise<Model<M> | null>;
  update(id: any, payload: CreationAttributes<M>): Promise<Model<M> | null>;
}
