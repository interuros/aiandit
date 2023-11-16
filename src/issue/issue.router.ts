import { Router } from 'express';
import { IssueController } from './issue.controller';
import { validationMiddleware } from '../common';
import { PostIssueDto } from './dto/post-issue.dto';

export const issueRouter = Router();

issueRouter.post(
  '/',
  validationMiddleware<PostIssueDto>(PostIssueDto),
  IssueController.instance().create,
);
issueRouter.patch(`/:issueId`, IssueController.instance().resolve);
