import {
  Request,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException
} from '@nestjs/common';
import { ModService } from './mod.service';
import { CreateModDto } from './dto/create-mod.dto';
import { UpdateModDto } from './dto/update-mod.dto';
import {JwtAuthGuard} from "../auth/guards/jwtAuth.guard";
import {Mod} from "../1-entities/mod.entity";

@Controller('mod')
export class ModController {
  constructor(private readonly modService: ModService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req,@Body() createModDto: CreateModDto) {
    return this.modService.create(req.user.id,createModDto);
  }

  @Get()
  async findAll() {
    return this.modService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.modService.findById(+id);
  }

  @Get('category/:id')
  async findOneByCategory(@Param('id') id:string){
    return this.modService.findByCategory(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Request() req,@Param('id') id: string, @Body() updateModDto: UpdateModDto) {

    const currentUser = req.user.id;
    const mod:Mod = await this.modService.findById(+id);

    if (currentUser!=mod.user.id){
      throw new BadRequestException("You do not have permission to edit this mod.")
    }

    return this.modService.update(+id, updateModDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req, @Param('id') id: string) {
    const currentUser = req.user.id;
    const currentUserRole:boolean = req.user.isAdmin;
    const mod = await this.modService.findById(+id);

    //console.log(currentUserRole);
    //console.log(req.user.isAdmin);

    if (currentUser!=mod.user.id ){
      throw new BadRequestException("You do not have permission to delete this mod.")
    }else {
      return await this.modService.remove(+id);
    }


  }
}

