'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IssueRepository = exports.Repository = void 0;
const common_1 = require('../common');
const issue_model_1 = require('./issue.model');
class Repository extends common_1.BaseRepository {
  test() {
    return this.create({
      id: '',
      body: '',
    });
  }
}
exports.Repository = Repository;
exports.IssueRepository = new Repository(issue_model_1.default);
//# sourceMappingURL=issue.repository.js.map
