import { CatsService } from './cats.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cat } from './interfaces/cats.interfaces';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Put(':id')
    async edit(
        @Param('id') id: string,
        @Body() createCatDto: CreateCatDto
    ): Promise<Cat> {
        return this.catsService.edit(id, createCatDto);
    }
    
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Cat> {
        return this.catsService.findOne(id);
    }

    @Delete()
    async delete(@Param('id') id: string) {
        return this.catsService.delete(id);
    }
}
