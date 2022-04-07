import { Module } from '@nestjs/common';
import { NewsController } from '../news/news.controller';
import { NewsService } from '../news/news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
