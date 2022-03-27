import { Module } from '@nestjs/common';
import { CommentsController } from '../comments/comments.controller';
import { NewsModule } from '../module/news.module';
import { CommentsService } from '../comments/comments.sevice';

@Module({
  imports: [NewsModule],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}