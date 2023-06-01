import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../1-entities/user.entity";
import {Repository} from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
      @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
  }

  async create(createUserDto: CreateUserDto) {

    //Checks if the email already exists.
    const user = await this.findByEmail(createUserDto.email);
    if (user){
      throw new BadRequestException("Email is in use.");
    }

    const hashed = await bcrypt.hash(createUserDto.password, 100);
    const UserData = {...createUserDto, password:hashed}

    try {
      const newUser = this.userRepository.create(UserData);
      return this.userRepository.save(newUser);
    }catch (e){
      throw new BadRequestException(e);
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findById(id: number) {
    return await this.userRepository.findOneBy({id});
  }

  async findByEmail(email:string){
    return await this.userRepository.findOneBy({email});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {

      const UserData = {...updateUserDto}

      if (updateUserDto.password != "") {
        const hashed = await bcrypt.hash(updateUserDto.password, 100);
        const UserData = {...updateUserDto, password: hashed}
      }


      await this.userRepository.update(id,UserData)
      return this.findById(id);

    }catch (e){
      throw new BadRequestException(e)
    }
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
