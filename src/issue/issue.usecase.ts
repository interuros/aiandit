import { BaseUsecase } from '../common';
import Issue from './issue.model';
import { IssueRepository, Repository } from './issue.repository';

class Usecase extends BaseUsecase<Issue, Repository> {
  constructor(protected readonly repository) {
    super(repository);
  }
}

export const IssueUsecase = new Usecase(IssueRepository);
