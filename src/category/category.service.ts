import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Category} from "../1-entities/category.entity";
import {Repository} from "typeorm";
import {tsconfigPathsBeforeHookFactory} from "@nestjs/cli/lib/compiler/hooks/tsconfig-paths.hook";

@Injectable()
export class CategoryService {

  constructor(
      @InjectRepository(Category) private readonly categoryRepository:Repository<Category>
  ) {
  }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const newCategory = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(newCategory);

    }catch (e){
      throw new BadRequestException(e);
    }
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findById(id: number) {
    return await this.categoryRepository.findOneBy({id});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      await this.categoryRepository.update(id,updateCategoryDto)
      return this.findById(id);

    }catch (e){
      throw new BadRequestException(e)
    }
  }

  async remove(id: number) {
    try {
      return this.categoryRepository.delete(id);
    }
    catch (e) {

      throw new BadRequestException(e);
    }
  }
}

/*
async remove(id: number): Promise<DeleteResult> {
    const blogs = await this.blogService.findByCategoryId(id);
    blogs.map((blog:Blog,i)=>{
      this.blogService.remove(blog.id);
    });
    try {
      return this.categoryRepository.delete(id);
    }
    catch (e) {
      console.log(e);
      throw new BadRequestException('Napaka pri brisanju');
    }
 */
