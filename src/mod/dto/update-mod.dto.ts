import { PartialType } from '@nestjs/mapped-types';
import { CreateModDto } from './create-mod.dto';
import {IsNotEmpty, IsOptional} from "class-validator";

export class UpdateModDto extends PartialType(CreateModDto) {

    @IsOptional()
    title?:string;

    @IsOptional()
    description?:string;

    @IsOptional()
    url?:string;

    @IsOptional()
    rating?:number;
}
