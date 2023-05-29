import { Module } from '@nestjs/common';
import { ModService } from './mod.service';
import { ModController } from './mod.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Mod} from "../1-entities/mod.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([Mod])
  ],
  controllers: [ModController],
  providers: [ModService]
})
export class ModModule {}
