import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Block extends Document {
  @Prop({ maxlength: 40, unique: true, immutable: true })
  description: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop({ max: 100, min: 0 })
  progress: number;
}

export const BlockSchema = SchemaFactory.createForClass(Block);
