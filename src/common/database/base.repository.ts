import { IRepository } from './i.repository';
import { Model, ModelCtor } from 'sequelize';
import { CreationAttributes } from 'sequelize/types/model';

export abstract class BaseRepository<M extends Model<M>>
  implements IRepository<M>
{
  constructor(private readonly model: ModelCtor<M>) {}

  async create(payload: CreationAttributes<M>): Promise<Model<M>> {
    return this.model.create(payload);
  }

  async deleteById(id: any): Promise<number> {
    return this.model.destroy({
      /*where: {
                id,
            }*/
    });
  }

  async getById(id: string): Promise<Model<M> | null> {
    return this.model.findByPk(id);
  }

  async update(
    id: any,
    payload: CreationAttributes<M>,
  ): Promise<Model<M> | null> {
    await this.model.update(payload, {
      where: {
        /*id,*/
      },
    });

    return this.getById(id);
  }
}
