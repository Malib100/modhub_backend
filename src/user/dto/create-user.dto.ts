import {IsEmail, IsNotEmpty, IsOptional, MinLength} from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    username:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @MinLength(8)
    password:string

    @IsOptional()
    isAdmin?:boolean;

    @IsOptional()
    isBlocked?:boolean;
}
