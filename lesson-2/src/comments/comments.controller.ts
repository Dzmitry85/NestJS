import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { News } from '../interfance/news.interface';
import { Comments } from '../interfance/comments.interface';
import { CommentsService } from './comments.sevice';
import { IdDecrement } from '../utils/decrement-id.decorator';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('/get-one')
  async getCommentsSingle(
    @Query()
    @IdDecrement(['newsId', 'commentsId'])
    query: { newsId: number; commentsId: number },): Promise<Comments> {
    return this.commentsService.getCommentsSingle( query.newsId, query.commentsId, );
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

  @Put('update')
  async updateComments(
    @Query()
    @IdDecrement(['newsId', 'commentsId'])
    query: { newsId: number; commentsId: number },
    @Body() @IdDecrement(['commentsId']) body: Comments,
  ): Promise<News[]> {
    return this.commentsService.updateComments(
      query.newsId,
      query.commentsId,
      body,
    );
  }

  @Delete('delete')
  async deleteComment(@Body() body: { postId: number, commentId: number }): Promise<News[]> {
    return this.commentsService.deleteComment(body.postId, body.commentId);
  }
}
 