import { IsString, Length } from 'class-validator';

export class PostIssueDto {
  @IsString()
  @Length(1, 500)
  body: string;
}
