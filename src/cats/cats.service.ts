import { CreateCatDto } from './dto/create-cat.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schemas';

@Injectable()
export class CatsService {
    constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createCat = await this.catModel.create(createCatDto);
        return createCat;
    }

    async edit(id: string, createCatDto: CreateCatDto): Promise<Cat> {
        return this.catModel
        .findOneAndUpdate(
            {
                _id: id,
            },
            createCatDto,
            {
                new: true,
            },
        )
        .exec();
    }
    
    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

    async findOne(id: string): Promise<Cat> {
        return this.catModel.findOne({_id: id}).exec();
    }

    async delete(id: string){
        const deleteCat = await this.catModel.findOneAndRemove({_id: id}).exec();
        return deleteCat;
    }
}
