import { BaseUsecase } from '../../common';
import SupportAgent from '../model/support-agent.model';
import { SupportAgentRepository } from '../repository';
import Issue from '../../issue';
import { SupportAgentIssueUsecase } from './support-agent-issue.usecase';
import SupportAgentIssue from '../model/support-agent-issue.model';
import { IssueUsecase } from '../../issue/issue.usecase';

export class SupportAgentUsecase extends BaseUsecase<
  SupportAgent,
  SupportAgentRepository
> {
  constructor(
    protected readonly repository: SupportAgentRepository,
    private readonly supportAgentIssueService: SupportAgentIssueUsecase,
    private readonly issueService: IssueUsecase,
  ) {
    super(repository);
  }

  static instance(): SupportAgentUsecase {
    return super.instance(
      SupportAgentUsecase,
      SupportAgentRepository.instance(),
      SupportAgentIssueUsecase.instance(),
      IssueUsecase.instance(),
    );
  }

  async assignIssue(issue: Issue): Promise<SupportAgentIssue> {
    const randomAgent: SupportAgent = await this.getRandomFreeAgent();

    if (randomAgent) {
      return this.supportAgentIssueService.assignIssueToAgent(
        issue,
        randomAgent,
      );
    }

    return null;
  }

  async assignRandomOpenIssueToAgent(
    agent: SupportAgent,
  ): Promise<SupportAgentIssue> {
    const issue: Issue = await this.issueService.getRandomOpenIssue();

    if (issue) {
      return this.supportAgentIssueService.assignIssueToAgent(issue, agent);
    }

    return null;
  }

  getIssueAgent(issue: Issue): Promise<SupportAgent> {
    return this.repository.getIssueAgent(issue);
  }

  getRandomFreeAgent(): Promise<SupportAgent> {
    return this.repository.getRandomFreeAgent();
  }
}
