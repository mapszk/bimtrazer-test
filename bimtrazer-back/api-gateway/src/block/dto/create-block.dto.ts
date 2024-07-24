import { IsInt, IsNotEmpty, Max, MaxLength, Min } from 'class-validator';

export class CreateBlockDto {
  @MaxLength(40)
  @IsNotEmpty()
  description: string;

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
