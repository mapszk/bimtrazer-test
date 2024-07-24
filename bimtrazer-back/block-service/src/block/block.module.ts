import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Block, BlockSchema } from './entities/block.entity';

@Module({
  controllers: [BlockController],
  providers: [BlockService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Block.name,
        schema: BlockSchema,
      },
    ]),
  ],
})
export class BlockModule {}
