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
  create(@Body() CreatePostDto: CreatePostDto) {
    console.log(CreatePostDto);
    return this.postService.create(CreatePostDto);
  }

   @Get("findAllPosts")
   findAll() {
     return this.postService.findAll();
   }

  @Get('/find/:id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne(+id);
  }

  @swagger.ApiCreatedResponse({type:UpdatePostDto})
  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
