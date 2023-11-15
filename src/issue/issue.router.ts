import { Router } from 'express';
import { IssueController } from './issue.controller';
import { uuidRegex, validationMiddleware } from '../common';
import { PostIssueDto } from './dto/post-issue.dto';

export const issueRouter = Router();

issueRouter.get('/');
issueRouter.post(
  '/',
  validationMiddleware<PostIssueDto>(PostIssueDto),
  IssueController.instance().create,
);
issueRouter.patch(
  `/:issueId(${uuidRegex})`,
  IssueController.instance().resolve,
);
