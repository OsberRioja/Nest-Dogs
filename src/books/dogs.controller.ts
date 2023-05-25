import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private dogService: DogsService) {
  }
  @Get()
  findAll() {
    return 'Esta accion retorna todos los perros';
  }
  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.dogService.deleteOne(+id);
  }

  @Put(':id')
  UpdateOne(@Param('id') id: string, @Body() createDogDto: CreateDogDto) {
    return this.dogService.UpdateOne(createDogDto,+id)
}
}
