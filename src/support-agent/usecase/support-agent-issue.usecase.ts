import { BaseUsecase } from '../../common';
import SupportAgent from '../model/support-agent.model';
import { SupportAgentIssueRepository } from '../repository';
import Issue from '../../issue';
import SupportAgentIssue from '../model/support-agent-issue.model';

export class SupportAgentIssueUsecase extends BaseUsecase<
  SupportAgentIssue,
  SupportAgentIssueRepository
> {
  constructor(protected readonly repository: SupportAgentIssueRepository) {
    super(repository);
  }

  static instance(): SupportAgentIssueUsecase {
    return super.instance(
      SupportAgentIssueUsecase,
      SupportAgentIssueRepository.instance(),
    );
  }

  async markAsInactiveByIssueAndAgent(
    issue: Issue,
    agent: SupportAgent,
  ): Promise<SupportAgentIssue> {
    const assignment = await this.findByIssueAndAgent(issue, agent);

    if (assignment) {
      return this.markAsInactive(assignment);
    }

    return null;
  }

  findByIssueAndAgent(
    issue: Issue,
    agent: SupportAgent,
  ): Promise<SupportAgentIssue> {
    return this.repository.findByIssueAndAgent(issue, agent);
  }

  markAsInactive(assignment: SupportAgentIssue): Promise<SupportAgentIssue> {
    return this.update(assignment.id, {
      active: false,
    });
  }

  assignIssueToAgent(
    issue: Issue,
    agent: SupportAgent,
  ): Promise<SupportAgentIssue> {
    return this.repository.assignIssueToAgent(issue, agent);
  }
}
