import { EventEmitter } from 'events';
import {
  SupportAgentIssueUsecase,
  SupportAgentUsecase,
} from '../../support-agent/usecase';
import Issue from '../issue.model';

class IssueEventEmitter extends EventEmitter {
  constructor(
    private readonly supportAgentService: SupportAgentUsecase,
    private readonly assignmentService: SupportAgentIssueUsecase,
  ) {
    super();
  }

  assignIssue(issue: Issue): void {
    this.supportAgentService.assignIssue(issue).then();
  }

  async assignSupportAgent(issue: Issue): Promise<void> {
    const agent = await this.supportAgentService.getIssueAgent(issue);

    await this.assignmentService.markAsInactiveByIssueAndAgent(issue, agent);
    await this.supportAgentService.assignRandomOpenIssueToAgent(agent);
  }
}

export const issueEvent = new IssueEventEmitter(
  SupportAgentUsecase.instance(),
  SupportAgentIssueUsecase.instance(),
);

issueEvent.on('created', issueEvent.assignIssue);
issueEvent.on('resolved', issueEvent.assignSupportAgent);
