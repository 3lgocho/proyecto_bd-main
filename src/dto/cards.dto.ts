import { IsNotEmpty, IsOptional, IsUUID, IsDateString, Length } from 'class-validator';

export class Card {
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @Length(1, 256)
  title: string;

  @IsOptional()
  @Length(0, 1000)
  description?: string;

  @IsOptional()
  @IsDateString()
  due_date?: Date;

  @IsUUID()
  list_id: string;
}
