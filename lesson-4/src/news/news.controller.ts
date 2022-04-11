import { Controller, Query, Body, Get, Post, Delete, Render } from '@nestjs/common';
import { News, loadNews } from '../dto/news.dto';
import { NewsService } from '../news/news.service';
import { IdDecrement } from '../utils/decrement-id.decorator';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get('get-one')
  @Render('index')
  getNewsSingle(@Query() @IdDecrement(['newsId']) query: { newsId: number }): {
    message: News;
  } {
    return { message: this.newsService.getNewsSingle(query.newsId) };
  }

  @Get('get-all')
  async getNewsAll(): Promise<News[]> {
    return this.newsService.getNewsAll();
  }

  @Post('add')
  async createNews(
    @Body() @IdDecrement(['newsId']) body: loadNews,
  ): Promise<News[]> {
    return this.newsService.createNews(body);
  }


  @Delete('delete')
  async deleteNews(
    @Query() @IdDecrement(['newsId']) query: { newsId: number },
  ): Promise<News[]> {
    return this.newsService.deleteNews(query.newsId);
  }
}