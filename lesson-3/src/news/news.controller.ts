import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { News, loadNews } from '../dto/news.dto.js';
import { NewsService } from './news.service';
import { IdDecrement } from '../utils/decrement-id.decorator';

@Controller('news')
export class NewsController {

  constructor(private newsService: NewsService) {}
 
  @Get('get-all')
  async getNews(): Promise<News[]> {
      return this.newsService.getNewsAll();
    }

  @Put('create')
  @HttpCode(HttpStatus.CREATED)
  async createNews( @Body() @IdDecrement(['newsId']) body: loadNews,
  ): Promise<News[]> {
    return this.newsService.createNews(body);
  }

  @Get('get-one')
  async oneNews(@Query() @IdDecrement(['newsId']) query: { newsId: number },
  ): Promise<News> {
    return this.newsService.getNewsSingle(query.newsId);
  }

  

  @Delete('delete')
  async deleteNews( @Query() @IdDecrement(['newsId']) query: { newsId: number },
  ): Promise<News[]> {
    return this.newsService.deleteNews(query.newsId);
  }
}
