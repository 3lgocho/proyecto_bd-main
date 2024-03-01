import { IsBoolean, IsUUID } from 'class-validator';

export class BoardUser {
  @IsUUID()
  id: string;

  @IsBoolean()
  isAdmin: boolean;

  @IsUUID()
  boardId: string;

  @IsUUID()
  userId: string;
}
