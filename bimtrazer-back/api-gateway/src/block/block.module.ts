import { Module } from '@nestjs/common';
import { BlockService } from './block.service';
import { BlockController } from './block.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  controllers: [BlockController],
  providers: [BlockService],
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
  ],
})
export class BlockModule {}
