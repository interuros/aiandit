import { BaseUsecase } from '../../common';
import SupportAgent from '../model/support-agent.model';
import { SupportAgentRepository } from '../repository';
import Issue from '../../issue';
import { SupportAgentIssueUsecase } from './support-agent-issue.usecase';
import SupportAgentIssue from '../model/support-agent-issue.model';

export class SupportAgentUsecase extends BaseUsecase<
  SupportAgent,
  SupportAgentRepository
> {
  constructor(
    protected readonly repository: SupportAgentRepository,
    private readonly supportAgentIssueService: SupportAgentIssueUsecase,
  ) {
    super(repository);
  }

  static instance(): SupportAgentUsecase {
    return super.instance(
      SupportAgentUsecase,
      SupportAgentRepository.instance(),
      SupportAgentIssueUsecase.instance(),
    );
  }

  async assignIssue(issue: Issue): Promise<SupportAgentIssue> {
    const randomAgent = await this.getRandomFreeAgent();

    if (randomAgent) {
      return this.supportAgentIssueService.assignIssueToAgent(
        issue,
        randomAgent,
      );
    }

    return null;
  }

  getRandomFreeAgent(): Promise<SupportAgent> {
    return this.repository.getRandomFreeAgent();
  }
}
