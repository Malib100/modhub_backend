import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-game.dto';
import {IsNotEmpty, IsOptional} from "class-validator";

export class UpdateGameDto extends PartialType(CreateGameDto) {
    @IsOptional()
    title?:string;

    @IsOptional()
    description?:string;
}
