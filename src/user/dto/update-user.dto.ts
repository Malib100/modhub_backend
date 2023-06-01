import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsEmail, IsNotEmpty, IsOptional, MinLength} from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsOptional()
    username?:string;

    @IsOptional()
    @MinLength(8)
    password?:string

    @IsOptional()
    isAdmin?:boolean;

    @IsOptional()
    isBlocked?:boolean;
}
