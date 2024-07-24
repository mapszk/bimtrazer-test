import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Model } from 'mongoose';
import { Block } from './entities/block.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlockService {
  constructor(
    @InjectModel(Block.name) private readonly blockModel: Model<Block>,
  ) {}

  async create(createBlockDto: CreateBlockDto) {
    const block = await this.blockModel.create(createBlockDto);
    return block;
  }

  async findAll() {
    return this.blockModel.find();
  }

  async findOne(id: string) {
    const block = await this.blockModel.findById(id);
    if (!block) throw new NotFoundException(`Block with id ${id} not found`);
    return block;
  }

  async update(id: string, updateBlockDto: UpdateBlockDto) {
    await this.blockModel.findByIdAndUpdate(id, updateBlockDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.blockModel.findByIdAndDelete(id);
  }
}
