import { BaseRepository } from '../common';
import Issue from './issue.model';

export class Repository extends BaseRepository<Issue> {
  test(): Promise<any> {
    return this.create({
      id: '',
      body: '',
    });
  }
}

export const IssueRepository = new Repository(Issue);
