import { Body, Controller, Delete, Get, Post, Put, Query,Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CommentsService } from './comments.sevice';
import { IdDecrement } from '../utils/decrement-id.decorator';
import { Express, Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { NewsEntity } from '../database/news.entity';
import { CommentsEntity } from '../database/comments.entity';
import { CommentsLoad } from '../dto/comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('/get-one')
  async getCommentsSingle(
    @Query()
    @IdDecrement(['newsId', 'commentsId'])
    query: {
      newsId: number;
      commentsId: number;
    },
  ): Promise<CommentsEntity> {
    return await this.commentsService.getCommentsSingle(query.newsId, query.commentsId,);
  }

  @Get('all')
  async getCommentsAll(
    @Query() @IdDecrement(['newsId']) query: { newsId: number },
  ): Promise<CommentsEntity[]> {
    return this.commentsService.getCommentsAll(query.newsId);
  }


  @Post('add')
  async createCommentsSingle(
    @Query() query: { newsId: number },
    @Body() comment: CommentsLoad,
  ): Promise<NewsEntity> {
    return await this.commentsService.createCommentsSingle(
      query.newsId,
      comment,
    );  
}

  @Put('update')
  async updateCommentsSingle(
    @Query()
    query: { newsId: number; commentsId: number },
    @Body() comment: CommentsLoad,
  ): Promise<string> {
    return await this.commentsService.updateCommentsSingle(
      query.newsId,
      query.commentsId,
      comment,
    );
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCommentsAvatar(
    @Query()
    
    query: { newsId: number; commentsId: number },
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.commentsService.uploadCommentsAvatar(
      query.newsId,
      query.commentsId,
      file.path,
    );
  }

  

}
 