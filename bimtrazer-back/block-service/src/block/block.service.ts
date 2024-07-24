import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Block } from './entities/block.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlockService {
  constructor(
    @InjectModel(Block.name) private readonly blockModel: Model<Block>,
  ) {}

  async create(createBlockDto: CreateBlockDto) {
    const pokemon = await this.blockModel.create(createBlockDto);
    return pokemon;
  }

  async findAll() {
    return this.blockModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id))
      throw new BadRequestException(`Id ${id} is not a valid id`);
    const pokemon = await this.blockModel.findById(id);
    if (!pokemon) throw new NotFoundException(`Block with id ${id} not found`);
    return pokemon;
  }

  async update(id: string, updateBlockDto: UpdateBlockDto) {
    await this.blockModel.findByIdAndUpdate(id, updateBlockDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.blockModel.findByIdAndDelete(id);
  }
}
