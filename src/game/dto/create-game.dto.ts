import {IsNotEmpty, IsOptional} from "class-validator";

export class CreateGameDto {
    @IsNotEmpty()
    title:string;

    @IsOptional()
    description?:string;
}
