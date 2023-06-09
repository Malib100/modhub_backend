import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule} from "@nestjs/config";
import {User} from "../1-entities/user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {LocalStrategy} from "./strategies/local.strategy";

@Module({

  imports:[
    UserModule,
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '1d'},
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService,UserService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
