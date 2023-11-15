import { BaseUsecase } from '../../common';
import SupportAgent from '../model/support-agent.model';
import { SupportAgentRepository } from '../repository';
import Issue from '../../issue';

export class SupportAgentUsecase extends BaseUsecase<
  SupportAgent,
  SupportAgentRepository
> {
  constructor(protected readonly repository) {
    super(repository);
  }

  static instance(): SupportAgentUsecase {
    return super.instance(
      SupportAgentUsecase,
      SupportAgentRepository.instance(),
    );
  }

  assignIssue(issue: Issue): Promise<Issue> {
    return null;
  }
}
