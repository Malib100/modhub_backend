import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Game} from "../1-entities/game.entity";
import {Repository} from "typeorm";

@Injectable()
export class GameService {

  constructor(
      @InjectRepository(Game) private readonly gameRepository: Repository<Game>
  ) {
  }

  async create(createGameDto: CreateGameDto) {
    try {
      const newGame = this.gameRepository.create(createGameDto);
      return await this.gameRepository.save(newGame);
    }catch (e){
      throw new BadRequestException(e)
    }
  }

  async findAll() {
    return await this.gameRepository.find();
  }

  async findById(id: number) {
    return await this.gameRepository.findOneBy({id});
  }

  async update(id: number, updateGameDto: UpdateGameDto) {
    try {
      await this.gameRepository.update(id, updateGameDto);
      return this.findById(id);
    }catch (e){
      throw new BadRequestException(e)
    }
  }

  async remove(id: number) {
    return await this.gameRepository.delete(id);
  }
}
