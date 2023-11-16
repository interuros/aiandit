import { BaseRepository } from '../../common';
import SupportAgent from '../model/support-agent.model';
import { Sequelize } from 'sequelize';
import SupportAgentIssue from '../model/support-agent-issue.model';

export class SupportAgentRepository extends BaseRepository<SupportAgent> {
  static instance(): SupportAgentRepository {
    return super.instance(SupportAgentRepository, SupportAgent);
  }

  async getRandomFreeAgent(): Promise<SupportAgent> {
    const randomAgent = await this.findAll({
      include: [
        {
          model: SupportAgentIssue,
          required: false,
          as: 'issues',
        },
      ],
      subQuery: false,
      where: Sequelize.literal('"issues"."id" is null'),
      order: [Sequelize.literal('random()')],
      limit: 1,
    });
    console.log(randomAgent);
    return randomAgent[0];
  }
}
