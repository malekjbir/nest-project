import { ArrayMinSize, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    public id: number;
    
    @IsString()
    @IsNotEmpty()
    public title: string;

    @IsString()
    @IsNotEmpty()
    public content: string;

    @IsBoolean()
    public published: boolean;

    @IsString()
    @IsNotEmpty()
    public authorId: number;
  
 

}
