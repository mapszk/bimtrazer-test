import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BlockModule } from './block/block.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BlockService',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
    ]),
    BlockModule,
  ],
})
export class AppModule {}
