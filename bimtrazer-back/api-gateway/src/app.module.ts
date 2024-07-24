import { Module } from '@nestjs/common';
import { BlockModule } from './block/block.module';
import { ConfigModule } from '@nestjs/config';
import { configLoader } from './config/config.loader';
import { AuthModule } from './auth/auth.module';
import { envSchema } from './config/env-schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envSchema,
      load: [configLoader],
    }),
    BlockModule,
    AuthModule,
  ],
})
export class AppModule {}
