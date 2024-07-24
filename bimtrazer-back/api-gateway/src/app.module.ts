import { Module } from '@nestjs/common';
import { BlockModule } from './block/block.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './config/config.loader';

@Module({
  imports: [
    BlockModule,
    AuthModule,
    ConfigModule.forRoot({
      load: [configLoader],
    }),
  ],
})
export class AppModule {}
