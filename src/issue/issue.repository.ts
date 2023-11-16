import { BaseRepository } from '../common';
import Issue from './issue.model';
import { IssueStatusEnum } from './enum';
import SupportAgentIssue from '../support-agent/model/support-agent-issue.model';
import { Op, Sequelize } from 'sequelize';

export class IssueRepository extends BaseRepository<Issue> {
  resolve(id: string): Promise<Issue> {
    return this.update(id, {
      status: IssueStatusEnum.RESOLVED,
    });
  }

  async getRandomOpenIssue(): Promise<Issue> {
    const randomIssue = await this.findAll({
      include: [
        {
          model: SupportAgentIssue,
          required: false,
          as: 'agents',
        },
      ],
      subQuery: false,
      where: {
        [Op.and]: [
          Sequelize.literal('"agents"."id" is null'),
          { status: IssueStatusEnum.OPEN },
        ],
      },
      order: [Sequelize.literal('random()')],
      limit: 1,
    });

    return randomIssue[0];
  }

  static instance(): IssueRepository {
    return super.instance(IssueRepository, Issue);
  }
}
