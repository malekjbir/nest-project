import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto';
import * as swagger from '@nestjs/swagger';

import {CreatePostDto} from './dto/create-post.dto';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @swagger.ApiCreatedResponse({type:CreatePostDto})
  @Post('/create/Post')
  create(@Body() data: CreatePostDto) {
    console.log(data);
    return this.postService.create(data);
  }

  // @Get("findAllPosts")
  // findAll() {
  //   return prisma.post.findMany();
  // }

  @Get('/find/:id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne();
   
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
