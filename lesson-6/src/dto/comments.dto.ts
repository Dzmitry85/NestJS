import { IsOptional, IsString  } from 'class-validator';


export class CommentsLoad {
    @IsString()
    description!: string;
  
    @IsString()
    @IsOptional()
    avatar!: string;
  }
  
