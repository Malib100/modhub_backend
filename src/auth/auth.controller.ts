import {Controller, Get, Post, Res,Request, UseGuards} from '@nestjs/common';
import {JwtAuthGuard} from "./guards/jwtAuth.guard";
import {LocalAuthGuard} from "./guards/localAuth.guard";
import {AuthService} from "./auth.service";
import {Response} from "express";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {
    }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    signIn(@Request() req, @Res() res: Response){
        const jwt = req.user;
        res.setHeader('Set-Cookie',[jwt]).json();
        //const token = 'access_token'

    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@Request() req){
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    logout(@Request() req){
        req.res.setHeader("Set-Cookie", `Access_token=; HttpOnly; Path=/; Max-Age=0`);
    }

}
