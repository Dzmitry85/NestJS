import { Injectable } from '@nestjs/common';
import { Comments, CommentsLoad } from '../dto/comments.dto';
import { News } from '../dto/news.dto';
import { NewsService } from '../news/news.service';


let commentsId = 4;

@Injectable()
export class CommentsService {
  uploadAvatar(newsId: number, commentsId: number, path: string) {
    throw new Error('Method not implemented.');
  }
  deleteComment(postId: number, commentId: number): News[] | PromiseLike<News[]> {
    throw new Error('Method not implemented.');
  }
  constructor(private newsService: NewsService) {}

  async getCommentsSingle(
    newsId: number,
    commentsId: number,
  ): Promise<Comments> {
    const news = await this.newsService.getNewsAll();
    if (news[newsId].comments[commentsId]) {
      return news[newsId].comments[commentsId];
    } else throw new Error('Error 404');
  }

  async getCommentsAll(newsId: number): Promise<Comments[]> {
    const news = await this.newsService.getNewsAll();
    return news[newsId].comments;
  }

  async createComments(newsId: number, data: CommentsLoad): Promise<News[]> {
    const news = await this.newsService.getNewsAll();
    const newCommentsEntry: Comments = {
      ...data,
      commentsId: commentsId,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };
    commentsId++;
    news[newsId].comments.push(newCommentsEntry);
    return news;
  }

  async updateComments(
    newsId: number,
    commentsId: number,
    data: CommentsLoad,
  ): Promise<News[]> {
    const news = await this.newsService.getNewsAll();
    let existingComments = news[newsId].comments[commentsId];
    existingComments = {
      ...existingComments,
      ...data,
      updatedAt: new Date(Date.now()),
    };
    news[newsId].comments[commentsId] = existingComments;
    return news;
  }

  async Avatar(
    newsId: number,
    commentsId: number,
    path: string,
  ): Promise<void> {
    const news = await this.newsService.getNewsAll();
    news[newsId].comments[commentsId].avatar = path;
  }
}