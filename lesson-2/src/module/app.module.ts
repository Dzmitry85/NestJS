import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { NewsModule } from './news.module';
import { calcModule } from './calc.module';
import { CommentsModule } from './commets.module'; 
import { NewsController } from 'src/news/news.controller';
import { calcController } from 'src/calculator/calc.controller';
import { CommentsController } from 'src/comments/comments.controller';
import { calcService } from 'src/calculator/calc.service';
import { NewsService } from 'src/news/news.service';
import { CommentsService } from 'src/comments/comments.sevice';



@Module({
  imports: [NewsModule, calcModule, CommentsModule],
  controllers: [NewsController, calcController, CommentsController],
  providers: [AppService, calcService, NewsService, CommentsService],
})
export class AppModule {}
