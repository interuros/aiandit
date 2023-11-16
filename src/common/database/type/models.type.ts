import { Model, ModelStatic } from 'sequelize';

export type ModelsType = Record<
  string,
  ModelStatic<Model<any, any>> & { associate?: (models: ModelsType) => {} }
>;
