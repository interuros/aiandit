import { BaseUsecase } from '../common';
import Issue from './issue.model';
import { IssueRepository } from './issue.repository';

export class IssueUsecase extends BaseUsecase<Issue, IssueRepository> {
  constructor(protected readonly repository: IssueRepository) {
    super(repository);
  }

  async resolve(id: string): Promise<Issue> {
    const issue = await this.repository.resolve(id);

    return issue;
  }

  getRandomOpenIssue(): Promise<Issue> {
    return this.repository.getRandomOpenIssue();
  }

  static instance(): IssueUsecase {
    return super.instance(IssueUsecase, IssueRepository.instance());
  }
}
