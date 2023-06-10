import {Column} from "typeorm";
import {IsNotEmpty, IsOptional} from "class-validator";

export class CreateModDto {

    @IsNotEmpty()
    title:string;

    @IsOptional()
    description?:string;

    @IsOptional()
    rating?:number;

    @IsNotEmpty()
    category_id:number;

    @IsNotEmpty()
    game_id:number;
}
