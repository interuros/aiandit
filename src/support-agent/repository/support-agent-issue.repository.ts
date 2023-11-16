import { BaseRepository } from '../../common';
import SupportAgentIssue from '../model/support-agent-issue.model';
import Issue from '../../issue';
import SupportAgent from '../model/support-agent.model';

export class SupportAgentIssueRepository extends BaseRepository<SupportAgentIssue> {
  static instance(): SupportAgentIssueRepository {
    return super.instance(SupportAgentIssueRepository, SupportAgentIssue);
  }

  assignIssueToAgent(
    issue: Issue,
    agent: SupportAgent,
  ): Promise<SupportAgentIssue> {
    return this.create({
      issueId: issue.id,
      supportAgentId: agent.id,
    });
  }
}
