import { Body, Controller, Delete, Get, Post, Put, Query,Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { News } from '../dto/news.dto';
import { Comments, CommentsLoad } from '../dto/comments.dto';
import { CommentsService } from './comments.sevice';
import { IdDecrement } from '../utils/decrement-id.decorator';
import { Express, Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';

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
  ): Promise<Comments> {
    return this.commentsService.getCommentsSingle(query.newsId, query.commentsId,);
  }

  @Get('all')
  async getCommentsAll(
    @Query() @IdDecrement(['newsId']) query: { newsId: number },
  ): Promise<Comments[]> {
    return this.commentsService.getCommentsAll(query.newsId);
  }

  @Post('add')
  async createComments(
    @Query() @IdDecrement(['newsId']) query: { newsId: number },
    @Body() @IdDecrement(['commentsId']) body: Comments,
  ): Promise<News[]> {
    return this.commentsService.createComments(query.newsId, body);
  }

 

  @Delete('delete')
  async deleteComment(@Body() body: { postId: number, commentId: number }): Promise<News[]> {
    return this.commentsService.deleteComment(body.postId, body.commentId);
  }
  @Get('file')
  getFile(@Res() res: Response) {
    const file = createReadStream(
      join(process.cwd(), './upload/'),
    );
    file.pipe(res);
  }

  @Put('update')
  async updateComments(
    @Query()
    @IdDecrement(['newsId', 'commentsId'])
    query: { newsId: number; commentsId: number },
    @Body() @IdDecrement(['commentsId']) body: CommentsLoad,
  ): Promise<News[]> {
    return this.commentsService.updateComments(
      query.newsId,
      query.commentsId,
      body,
    );
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async Avatar(
    @Query()
    @IdDecrement(['newsId', 'commentsId'])
    query: { newsId: number; commentsId: number },
    @UploadedFile() file: Express.Multer.File,
  ) {
    await this.commentsService.Avatar(
      query.newsId,
      query.commentsId,
      file.path,
    );
  }

  

}
 