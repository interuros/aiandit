import { BaseRepository } from '../common';
import Issue from './issue.model';
import { IssueStatusEnum } from './enum';

export class IssueRepository extends BaseRepository<Issue> {
  resolve(id: string): Promise<Issue> {
    return this.update(id, {
      status: IssueStatusEnum.RESOLVED,
    });
  }

  static instance(): IssueRepository {
    return super.instance(IssueRepository, Issue);
  }
}
