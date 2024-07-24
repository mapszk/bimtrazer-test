import { PartialType } from '@nestjs/mapped-types';
import { CreateBlockDto } from './create-block.dto';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {
  @IsNotEmpty()
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
