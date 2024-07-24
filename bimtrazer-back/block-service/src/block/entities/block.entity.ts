import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

export const PokemonSchema = SchemaFactory.createForClass(Block);
