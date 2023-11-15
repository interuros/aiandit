'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.IssueUsecase = void 0;
const common_1 = require('../common');
const issue_repository_1 = require('./issue.repository');
class Usecase extends common_1.BaseUsecase {
  constructor(repository) {
    super(repository);
    this.repository = repository;
  }
}
exports.IssueUsecase = new Usecase(issue_repository_1.IssueRepository);
//# sourceMappingURL=issue.usecase.js.map
