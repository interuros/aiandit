import { Model } from 'sequelize';

declare class Issue extends Model {
  id: string;
  body: string;
}
export default Issue;
