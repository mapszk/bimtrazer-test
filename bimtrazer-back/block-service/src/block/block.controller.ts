import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlockService } from './block.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Controller()
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @MessagePattern({ cmd: 'createBlock' })
  create(@Payload() createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }

  @MessagePattern({ cmd: 'findAllBlock' })
  findAll() {
    return this.blockService.findAll();
  }

  @MessagePattern({ cmd: 'findOneBlock' })
  findOne(@Payload() id: string) {
    return this.blockService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateBlock' })
  update(@Payload() updateBlockDto: UpdateBlockDto) {
    return this.blockService.update(updateBlockDto.id, updateBlockDto);
  }

  @MessagePattern({ cmd: 'removeBlock' })
  remove(@Payload() id: string) {
    this.blockService.remove(id);
  }
}
