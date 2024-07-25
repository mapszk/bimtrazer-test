import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BlockService {
  constructor(
    @Inject('BlockService') private readonly clientBlockService: ClientProxy,
  ) {}

  async create(createBlockDto: CreateBlockDto) {
    try {
      const pattern = { cmd: 'createBlock' };
      const payload = createBlockDto;
      const result = await this.clientBlockService
        .send(pattern, payload)
        .toPromise();
      return result;
    } catch (err) {
      throw new HttpException(err.statusText, err.status);
    }
  }

  findAll() {
    const pattern = { cmd: 'findAllBlock' };
    const payload = {};
    return this.clientBlockService.send(pattern, payload).toPromise();
  }

  async findOne(id: string) {
    try {
      const pattern = { cmd: 'findOneBlock' };
      const payload = id;
      const result = await this.clientBlockService
        .send(pattern, payload)
        .toPromise();
      return result;
    } catch (err) {
      throw new HttpException(err.statusText, err.status);
    }
  }

  async update(id: string, updateBlockDto: UpdateBlockDto) {
    try {
      const pattern = { cmd: 'updateBlock' };
      const payload = { ...updateBlockDto, id };
      const result = await this.clientBlockService
        .send(pattern, payload)
        .toPromise();
      return result;
    } catch (err) {
      throw new HttpException(err.statusText, err.status);
    }
  }

  async remove(id: string) {
    const pattern = { cmd: 'removeBlock' };
    const payload = id;
    try {
      const result = await this.clientBlockService
        .send(pattern, payload)
        .toPromise();
      return result;
    } catch (err) {
      throw new HttpException(err.statusText, err.status);
    }
  }
}
