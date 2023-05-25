import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog) private dogRepository: Repository<Dog>,
  ) {}

  create(createDogDto: CreateDogDto) {
    //return createBookDto;
    return this.dogRepository.save(createDogDto);
  }

  findOne(id: number) {
    return this.dogRepository.findOne({ where: { id } });
  }

  deleteOne(id: number) {
    return this.dogRepository.delete(id);
  }

  UpdateOne(createDogDto: CreateDogDto, id:number) {
    return this.dogRepository.update(id,createDogDto)
  }


}