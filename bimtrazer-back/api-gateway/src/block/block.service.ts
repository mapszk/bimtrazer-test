import { Inject, Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BlockService {
  constructor(
    @Inject('BlockService') private readonly clientBlockService: ClientProxy,
  ) {}

  create(createBlockDto: CreateBlockDto) {
    const pattern = { cmd: 'createBlock' };
    const payload = createBlockDto;
    return this.clientBlockService.send(pattern, payload);
  }

  findAll() {
    const pattern = { cmd: 'findAllBlock' };
    const payload = {};
    return this.clientBlockService.send(pattern, payload);
  }

  findOne(id: string) {
    const pattern = { cmd: 'findOneBlock' };
    const payload = id;
    return this.clientBlockService.send(pattern, payload);
  }

  update(id: string, updateBlockDto: UpdateBlockDto) {
    const pattern = { cmd: 'updateBlock' };
    const payload = { ...updateBlockDto, id };
    return this.clientBlockService.send(pattern, payload);
  }

  remove(id: string) {
    const pattern = { cmd: 'removeBlock' };
    const payload = id;
    return this.clientBlockService.send(pattern, payload);
  }
}
