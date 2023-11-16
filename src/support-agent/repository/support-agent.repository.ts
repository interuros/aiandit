import { BaseRepository } from '../../common';
import SupportAgent from '../model/support-agent.model';
import { Sequelize } from 'sequelize';
import SupportAgentIssue from '../model/support-agent-issue.model';
import Issue from '../../issue';

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
      where: Sequelize.literal(
        '"issues"."id" is null or "issues"."active" = false',
      ),
      order: [Sequelize.literal('random()')],
      limit: 1,
    });

    return randomAgent[0];
  }

  getIssueAgent(issue: Issue): Promise<SupportAgent> {
    return this.findOne({
      include: [
        {
          model: SupportAgentIssue,
          required: true,
          as: 'issues',
          where: {
            issueId: issue.id,
          },
        },
      ],
    });
  }
}
