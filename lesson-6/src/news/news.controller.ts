import { Controller, Query, Body, Get, Put, UseGuards, Post, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';
import { loadNews } from '../dto/news.dto';
import { NewsEntity } from '../database/news.entity';
import { NewsService } from '../news/news.service';




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
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  async createNewsSingle(@Body() news: loadNews): Promise<NewsEntity> {
    return await this.newsService.createNewsSingle(news);
  }

  @Put('update')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  async updateNewsSingle(
    @Query() query: { newsId: number },
    @Body() news: loadNews,
  ): Promise<string> {
    return await this.newsService.updateNewsSingle(query.newsId, news);
  }


  @Delete('delete')
  async deleteNewsSingle(@Query() query: { newsId: number }): Promise<string> {
    return await this.newsService.deleteNewsSingle(query.newsId);
  }
}