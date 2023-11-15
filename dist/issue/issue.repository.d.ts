import { BaseRepository } from '../common';
import Issue from './issue.model';

export declare class Repository extends BaseRepository<Issue> {
  test(): Promise<any>;
}
export declare const IssueRepository: Repository;
