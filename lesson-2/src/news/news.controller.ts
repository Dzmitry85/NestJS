import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { News } from '../interfance/news.interface.js';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

  constructor(private newsService: NewsService) {}
  @Get('get-all')
  async getNews(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Put('create')
  @HttpCode(HttpStatus.CREATED)
  async createNews(@Body() body: News): Promise<News[]> {
    return this.newsService.createNews(body);
  }
  @Get('get-one')
  async oneNews(@Query() query: { id: number }): Promise<News> {
    return this.newsService.oneNews(query.id);
  }

  @Post('update')
  async updateNews(
    @Query() query: { id: number },
    @Body() body: News,
  ): Promise<News[]> {
    return this.newsService.updateNews(query.id, body);
  }


  @Delete('delete')
  async deleteNews(@Query() query: { id: number }): Promise<News[]> {
    return this.newsService.deleteNews(query.id);
  }
}
