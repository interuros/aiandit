import { EventEmitter } from 'events';
import { SupportAgentUsecase } from '../../support-agent/usecase';
import Issue from '../issue.model';

class IssueEventEmitter extends EventEmitter {
  constructor(private readonly supportAgentService: SupportAgentUsecase) {
    super();
  }

  assignIssue(issue: Issue): Promise<Issue> {
    return this.supportAgentService.assignIssue(issue);
  }
}

export const issueEvent = new IssueEventEmitter(SupportAgentUsecase.instance());

issueEvent.on('created', issueEvent.assignIssue);
issueEvent.on('resolved', issueEvent.assignIssue);
