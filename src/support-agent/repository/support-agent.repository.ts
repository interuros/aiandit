import { BaseRepository } from '../../common';
import SupportAgent from '../model/support-agent.model';

export class SupportAgentRepository extends BaseRepository<SupportAgent> {
  static instance(): SupportAgentRepository {
    return super.instance(SupportAgentRepository, SupportAgent);
  }
}
