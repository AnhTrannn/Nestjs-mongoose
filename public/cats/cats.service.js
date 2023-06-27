"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cat_schemas_1 = require("./schemas/cat.schemas");
let CatsService = exports.CatsService = class CatsService {
    constructor(catModel) {
        this.catModel = catModel;
    }
    async create(createCatDto) {
        const createCat = await this.catModel.create(createCatDto);
        return createCat;
    }
    async findAll() {
        return this.catModel.find().exec();
    }
    async findOne(id) {
        return this.catModel.findOne({ _id: id }).exec();
    }
    async delete(id) {
        const deleteCat = await this.catModel.findOneAndRemove({ _id: id }).exec();
        return deleteCat;
    }
};
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cat_schemas_1.Cat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CatsService);
//# sourceMappingURL=cats.service.js.map