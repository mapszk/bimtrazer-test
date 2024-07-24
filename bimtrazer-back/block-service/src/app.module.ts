import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockModule } from './block/block.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/block-db'),
    BlockModule,
  ],
  providers: [],
})
export class AppModule {}
