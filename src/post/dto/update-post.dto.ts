import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class UpdatePostDto extends PartialType(CreatePostDto) {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber() 
    public id: number;
  
    @ApiProperty()
    @IsString()
    public title: string;
     
    @ApiProperty()
    @IsString()
    public content: string;

    @ApiProperty()
    @IsBoolean()
    public published: boolean;

    @ApiProperty()
    @IsNumber()
    public authorId: number;
}
