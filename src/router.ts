import { Router } from 'express';
import { issueRouter } from './issue';

export const router = Router();

router.use('/issues', issueRouter);
