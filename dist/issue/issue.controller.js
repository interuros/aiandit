'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.create = void 0;
const issue_usecase_1 = require('./issue.usecase');
const create = (req, res, next) => {
  issue_usecase_1.IssueUsecase.create(req.body).then((issue) =>
    res.json(issue),
  );
};
exports.create = create;
//# sourceMappingURL=issue.controller.js.map
