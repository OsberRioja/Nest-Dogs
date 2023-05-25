import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {
  }
  @Get()
  findAll() {
    return 'Esta accion retorna todos los libros';
  }
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
}
