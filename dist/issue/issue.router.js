'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.issueRouter = void 0;
const express_1 = require('express');
const issue_controller_1 = require('./issue.controller');
const common_1 = require('../common');
const post_issue_dto_1 = require('./dto/post-issue.dto');
exports.issueRouter = (0, express_1.Router)();
exports.issueRouter.use('/issue', () => {
  exports.issueRouter.get('/');
  exports.issueRouter.post(
    '/',
    (0, common_1.validationMiddleware)(post_issue_dto_1.PostIssueDto),
    issue_controller_1.create,
  );
});
//# sourceMappingURL=issue.router.js.map
