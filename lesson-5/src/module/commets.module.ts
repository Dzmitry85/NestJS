import { Module } from '@nestjs/common';
import { CommentsController } from '../comments/comments.controller';
import { NewsModule } from '../module/news.module';
import { CommentsService } from '../comments/comments.sevice';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsEntity } from '../database/comments.entity';
import { NewsController } from '../news/news.controller';
import { NewsService } from '../news/news.service';
import { NewsEntity } from '../database/news.entity';
import { MailController } from '../mail/mail.comtroller';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [NewsModule,  TypeOrmModule.forFeature([CommentsEntity]), TypeOrmModule.forFeature([NewsEntity]),],
  controllers: [CommentsController,  NewsController, MailController],
  providers: [CommentsService, NewsService, MailService],
  exports: [CommentsService],
})
export class CommentsModule {}