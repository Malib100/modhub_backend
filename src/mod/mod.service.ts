import { Injectable } from '@nestjs/common';
import { CreateModDto } from './dto/create-mod.dto';
import { UpdateModDto } from './dto/update-mod.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Mod} from "../1-entities/mod.entity";
import {Repository} from "typeorm";

@Injectable()
export class ModService {

  constructor(@InjectRepository(Mod) private readonly modRepository:Repository<Mod>) {
  }

  async create(user_id:number,createModDto: CreateModDto) {
    const data = {...createModDto, user:{id:user_id},category: {id:createModDto.category_id}, game:{id:createModDto.game_id}};
    const mod:Mod = this.modRepository.create(data);

    return await this.modRepository.save(mod);
  }

  async findAll() {
    return await this.modRepository.find();
  }

  async findById(id: number) {
    return await this.modRepository.findOne({
      where:{id},
      relations:['user']
    })
  }

  async findByCategory(id: number): Promise<Mod[]> {
    return await this.modRepository.find(
        {
          where: {category: {id}}
        }
    );
  }

  async update(id: number, updateModDto: UpdateModDto) {
    await this.modRepository.update(id,updateModDto);
    return await this.findById(id);
  }

  async remove(id: number) {
    return await this.modRepository.delete(id);
  }
}
