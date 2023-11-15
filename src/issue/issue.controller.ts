import { RequestHandler } from 'express-serve-static-core';
import { IssueUsecase } from './issue.usecase';

const create: RequestHandler = (req, res, next): void => {
  IssueUsecase.create(req.body).then((issue) => res.json(issue));
};

export { create };
