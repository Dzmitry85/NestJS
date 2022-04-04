import {IsDate, IsInt, IsOptional, IsPositive, IsString  } from 'class-validator';


export class CommentsLoad {
    @IsString()
    description!: string;
  
    @IsString()
    @IsOptional()
    avatar!: string;
  }
  
  export class Comments extends CommentsLoad {
    @IsInt()
    @IsPositive()
    commentsId!: number;
  
    @IsDate()
    @IsOptional()
    createdAt!: Date;
  
    @IsDate()
    @IsOptional()
    updatedAt!: Date;
  }