import { Router } from 'express';
import { create } from './issue.controller';
import { validationMiddleware } from '../common';
import { PostIssueDto } from './dto/post-issue.dto';

export const issueRouter = Router();

issueRouter.get('/');
issueRouter.post('/', validationMiddleware<PostIssueDto>(PostIssueDto), create);
