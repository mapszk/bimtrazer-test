import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BlockService } from './block.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Controller()
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @MessagePattern('createBlock')
  create(@Payload() createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }

  @MessagePattern('findAllBlock')
  findAll() {
    return this.blockService.findAll();
  }

  @MessagePattern('findOneBlock')
  findOne(@Payload() id: string) {
    return this.blockService.findOne(id);
  }

  @MessagePattern('updateBlock')
  update(@Payload() updateBlockDto: UpdateBlockDto) {
    return this.blockService.update(updateBlockDto.id, updateBlockDto);
  }

  @MessagePattern('removeBlock')
  remove(@Payload() id: string) {
    return this.blockService.remove(id);
  }
}
