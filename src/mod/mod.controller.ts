import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModService } from './mod.service';
import { CreateModDto } from './dto/create-mod.dto';
import { UpdateModDto } from './dto/update-mod.dto';

@Controller('mod')
export class ModController {
  constructor(private readonly modService: ModService) {}

  @Post()
  create(@Body() createModDto: CreateModDto) {
    return this.modService.create(createModDto);
  }

  @Get()
  findAll() {
    return this.modService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModDto: UpdateModDto) {
    return this.modService.update(+id, updateModDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modService.remove(+id);
  }
}
