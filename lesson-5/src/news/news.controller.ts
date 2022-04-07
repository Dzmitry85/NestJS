import { Controller, Query, Body, Get, Post, Delete } from '@nestjs/common';
// import { News, loadNews } from '../dto/news.dto';
import { loadNews } from '../dto/news.dto';
import { NewsEntity } from '../database/news.entity';
import { NewsService } from '../news/news.service';
// import { IdDecrement } from '../utils/decrement-id.decorator';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

   @Get('get-one')
  async getNewsSingle(@Query() query: { newsId: number }): Promise<NewsEntity> {
    return await this.newsService.getNewsSingle(query.newsId);
  }

  @Get('get-all')
  async getNewsAll(): Promise<NewsEntity[]> {
    return await this.newsService.getNewsAll();
  }

  @Post('add')
  async createNewsSingle(@Body() news: loadNews): Promise<NewsEntity> {
    return await this.newsService.createNewsSingle(news);
  }


  @Delete('delete')
  async deleteNewsSingle(@Query() query: { newsId: number }): Promise<string> {
    return await this.newsService.deleteNewsSingle(query.newsId);
  }
}