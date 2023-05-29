import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModModule } from './mod/mod.module';
import { GameModule } from './game/game.module';
import { CategoryModule } from './category/category.module';
import { PictureModule } from './picture/picture.module';

@Module({
  imports: [UserModule, ModModule, GameModule, CategoryModule, PictureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
