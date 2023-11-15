import { BaseUsecase } from '../common';
import Issue from './issue.model';
import { Repository } from './issue.repository';

declare class Usecase extends BaseUsecase<Issue, Repository> {
  protected readonly repository: any;
  constructor(repository: any);
}
export declare const IssueUsecase: Usecase;
export {};
