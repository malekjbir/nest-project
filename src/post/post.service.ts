import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class PostService {
  create(data: any) {
    return prisma.post.create({data:data});
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    const response =  prisma.post.findUnique(
      {
        where: {
          id: id
        },
        select : {
          id: true,
          title: true,
          content: true,
          published: true,
          authorId: true,
          author: true
        }
      }
    );
    return response;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return prisma.post.delete({where : {id:id}});
  }
}
