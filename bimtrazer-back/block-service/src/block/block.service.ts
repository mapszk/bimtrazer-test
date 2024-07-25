import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { isValidObjectId, Model } from 'mongoose';
import { Block } from './entities/block.entity';
import { InjectModel } from '@nestjs/mongoose';
import { mongoErrorCodes } from 'utils/mongo';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class BlockService {
  constructor(
    @InjectModel(Block.name) private readonly blockModel: Model<Block>,
  ) {}

  async create(createBlockDto: CreateBlockDto) {
    try {
      const block = await this.blockModel.create(createBlockDto);
      return block;
    } catch (error) {
      if (error.code === mongoErrorCodes.duplicateKey) {
        const keyName = Object.keys(error.keyPattern)[0];
        throw new RpcException({
          status: 400,
          statusText: `Block with ${keyName} ${createBlockDto[keyName]} already exists`,
        });
      }
      throw new RpcException({
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  }

  async findAll() {
    return this.blockModel.find();
  }

  async findOne(id: string) {
    if (!isValidObjectId(id))
      throw new RpcException({
        status: 400,
        statusText: `Id ${id} is not a valid id`,
      });
    const block = await this.blockModel.findById(id);
    if (!block)
      throw new RpcException({
        status: 404,
        statusText: `Block with id ${id} not found`,
      });
    return block;
  }

  async update(id: string, updateBlockDto: UpdateBlockDto) {
    try {
      await this.blockModel.findByIdAndUpdate(id, updateBlockDto);
      return this.findOne(id);
    } catch (error) {
      if (error.code === mongoErrorCodes.duplicateKey) {
        const keyName = Object.keys(error.keyPattern)[0];
        throw new RpcException({
          status: 400,
          statusText: `Block with ${keyName} ${updateBlockDto[keyName]} already exists`,
        });
      }
      throw new RpcException({
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  }

  async remove(id: string) {
    await this.blockModel.findByIdAndDelete(id);
  }
}
