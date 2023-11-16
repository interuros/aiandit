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

  assignIssueToAgent(
    issue: Issue,
    agent: SupportAgent,
  ): Promise<SupportAgentIssue> {
    return this.repository.assignIssueToAgent(issue, agent);
  }
}
