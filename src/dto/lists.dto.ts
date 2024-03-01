import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class List {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @Length(1, 256)
  name: string;

  @IsUUID()
  board_id: string;
}
