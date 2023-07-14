import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public id: number;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public title: string;
     
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public content: string;

    @ApiProperty()
    @IsBoolean()
    public published: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public authorId: number;
  
 

}
