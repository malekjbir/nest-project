import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    required: true,
    type: 'number',
    name: 'id',
    description: 'id of the post'
  })
 id: number;
  
 @ApiProperty({
  required: true,
  type: 'string',
  name: 'title',
  description: 'title of post'
 })
 title: string;

 @ApiProperty({
  required: true,
  type: 'string',
  name: 'content',
  description: 'content of post'
 })
 content: string;

 @ApiProperty({
  required: true,
  type: 'boolean',
  name: 'published',
  description: 'published of post'
 })
 published: boolean;

 @ApiProperty({
  required: true,
  type: 'number',
  name: 'authorId',
  description: 'authorId of the post'
 })
 authorId: number;
}