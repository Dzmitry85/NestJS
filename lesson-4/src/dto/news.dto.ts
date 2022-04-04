import { Comments } from "./comments.dto";
import { IsArray, IsDate, IsInt, IsOptional, IsPositive, IsString, } from 'class-validator';

  export class loadNews {
    @IsString()
    title!: string;
  
    @IsString()
    description!: string;
  
    @IsArray()
    @IsOptional()
    comments: Comments[];
  }
  
  export class News extends loadNews {
    @IsInt()
    @IsPositive()
    newsId!: number;
  
    @IsDate()
    @IsOptional()
    createdAt!: Date;
  
    @IsDate()
    @IsOptional()
    updatedAt!: Date;
  }
