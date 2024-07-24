import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockModule } from './block/block.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/block-db'),
    BlockModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
