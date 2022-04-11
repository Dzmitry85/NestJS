import { Injectable } from '@nestjs/common';
import { Comments, CommentsLoad } from '../dto/comments.dto';
import { News } from '../dto/news.dto';
import { NewsService } from '../news/news.service';

// let commentsIdGlobal = 4;

// @Injectable()
// export class CommentsService {
//   getCommentsAll(newsId: number): Comments[] | PromiseLike<Comments[]> {
//     throw new Error('Method not implemented.');
//   }
//   constructor(private newsService: NewsService) {}

//   async getCommentsSingle(
//     newsId: number,
//     commentsId: number,
//   ): Promise<Comments> {
//     const news = await this.newsService.getNewsAll();
//     if (news[newsId].comments[commentsId]) {
//       return news[newsId].comments[commentsId];
//     } else throw new Error('Error 404');
//   }

  

//   async createComments(newsId: number, data: Comments): Promise<News[]> {
//     const news = await this.newsService.getNewsAll();
//     news[newsId].comments.push(data);
//     return news;
//   }

//   async updateComments(
//     newsId: number,
//     commentsId: number,
//     data: Comments,
//   ): Promise<News[]> {
//     const news = await this.newsService.getNewsAll();
//     let existingComments = news[newsId].comments[commentsId];
//     existingComments = { ...existingComments, ...data };
//     news[newsId].comments[commentsId] = existingComments;
//     return news;
//   }

//   async deleteComment(postId: number, commentId: number): Promise<News[]> {
//     const posts = await this.newsService.getNewsAll();
//     const post = posts[postId - 1];
//     const comment = post.comments[commentId - 1 ]
//     if (comment) {
//       post.comments.splice(commentId - 1, commentId - 1);
//       return posts;
//     } else throw new Error('Comment not found');
//   }
// }
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
    } else throw new Error('Error 404: Entry not found!');
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