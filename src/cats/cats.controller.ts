import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Cat> {
    return this.catsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateCatDto: CreateCatDto, @Param('id') id): Promise<Cat> {
    return this.catsService.update(id, updateCatDto);
  }
}
