import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModModule } from './mod/mod.module';
import { GameModule } from './game/game.module';
import { CategoryModule } from './category/category.module';
import { PictureModule } from './picture/picture.module';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal:true
      }),

/*
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_NAME|| 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      entities: [ ],
      synchronize: true
    }),
*/

    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port:5432,
      username: 'postgres',
      password: 'postgres',
      database: 'modhub',
      autoLoadEntities: true,
      entities: [ ],
      synchronize: true
    }),



    UserModule,
    ModModule,
    GameModule,
    CategoryModule,
    PictureModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
