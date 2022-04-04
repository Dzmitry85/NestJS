import { Module } from '@nestjs/common';
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
import { MulterModule } from '@nestjs/platform-express';
import { MailModule } from './mail.module';




@Module({
  imports: [NewsModule, calcModule, CommentsModule, MulterModule.register({ dest: './upload' }), MailModule],
  controllers: [NewsController, calcController, CommentsController],
  providers: [AppService, calcService, NewsService, CommentsService],
})
export class AppModule {}
