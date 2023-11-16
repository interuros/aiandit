import { IRepository } from './i.repository';
import { FindOptions, Model, ModelCtor } from 'sequelize';
import { CreationAttributes } from 'sequelize/types/model';

export abstract class BaseRepository<M extends Model<M>>
  implements IRepository<M>
{
  protected static _instance;

  constructor(private readonly model: ModelCtor<M>) {}

  static instance(type, model) {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new type(model);
    return this._instance;
  }

  async create(payload: CreationAttributes<M>): Promise<M> {
    return this.model.create(payload);
  }

  async deleteById(id: any): Promise<number> {
    const where = {
      id,
    };

    return this.model.destroy({
      where,
    });
  }

  async getById(id: string): Promise<M | null> {
    return this.model.findByPk(id);
  }

  async update(id: any, payload: CreationAttributes<M>): Promise<M | null> {
    const where = {
      id,
    };

    await this.model.update(payload, {
      where,
    });

    return this.getById(id);
  }

  findAll(options?: FindOptions<M>): Promise<M[]> {
    return this.model.findAll(options);
  }
}
