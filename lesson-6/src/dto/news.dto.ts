
import {  IsString, } from 'class-validator';

  export class loadNews {
    @IsString()
    title!: string;
  
    @IsString()
    description!: string;
  
  }
