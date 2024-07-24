import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockDto } from './create-block.dto';
import { IsInt, IsNotEmpty, IsUUID, Max, Min } from 'class-validator';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsInt()
  @Min(0)
  @Max(100)
  @IsNotEmpty()
  progress: number;

  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;
}
