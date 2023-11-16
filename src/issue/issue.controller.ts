import { RequestHandler } from 'express-serve-static-core';
import { IssueUsecase } from './issue.usecase';
import { Request } from 'express';
import { PostIssueDto } from './dto/post-issue.dto';
import { issueEvent } from './event/issue.event';

export class IssueController {
  private static _instance: IssueController;

  constructor(private readonly service: IssueUsecase) {}

  create: RequestHandler = (
    req: Request<any, any, PostIssueDto>,
    res,
  ): void => {
    this.service.create(req.body).then((issue) => {
      issueEvent.emit('created', issue);
      return res.json(issue);
    });
  };

  resolve: RequestHandler = (req: Request<{ issueId: string }>, res): void => {
    this.service.resolve(req.params.issueId).then((issue) => {
      issueEvent.emit('resolved', issue);
      return res.json(issue);
    });
  };

  static instance(): IssueController {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new IssueController(IssueUsecase.instance());
    return this._instance;
  }
}
