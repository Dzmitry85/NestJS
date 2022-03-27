import { Injectable } from '@nestjs/common';
import { Comments } from '../interfance/comments.interface';
import { News } from '../interfance/news.interface';
import { NewsService } from '../news/news.service';

@Injectable()
export class CommentsService {
  getCommentsAll(newsId: number): Comments[] | PromiseLike<Comments[]> {
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

  

  async createComments(newsId: number, data: Comments): Promise<News[]> {
    const news = await this.newsService.getNewsAll();
    news[newsId].comments.push(data);
    return news;
  }

  async updateComments(
    newsId: number,
    commentsId: number,
    data: Comments,
  ): Promise<News[]> {
    const news = await this.newsService.getNewsAll();
    let existingComments = news[newsId].comments[commentsId];
    existingComments = { ...existingComments, ...data };
    news[newsId].comments[commentsId] = existingComments;
    return news;
  }

  async deleteComment(postId: number, commentId: number): Promise<News[]> {
    const posts = await this.newsService.getNewsAll();
    const post = posts[postId - 1];
    const comment = post.comments[commentId - 1 ]
    if (comment) {
      post.comments.splice(commentId - 1, commentId - 1);
      return posts;
    } else throw new Error('Comment not found');
  }
}