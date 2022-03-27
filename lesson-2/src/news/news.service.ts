
import { Injectable } from '@nestjs/common';
import { News } from '../interfance/news.interface';

const news: News[] = [
  {
    newsId: 1,
    title: '1',
    description: 'text',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [
      {
        commentsId: 1,
        description: '1 comment text',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        commentsId: 2,
        description: '2 comment text',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ],
  },
  {
    newsId: 2,
    title: '2',
    description: 'text2',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    comments: [
      {
        commentsId: 1,
        description: 'Yet another comment',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ],
  },
];

@Injectable()
export class NewsService {
  findAll(): News[] | PromiseLike<News[]> {
    throw new Error('Method not implemented.');
  }
  oneNews(id: number): News | PromiseLike<News> {
    throw new Error('Method not implemented.');
  }
  private readonly news: News[] = [];

  async createNews(data: News): Promise<News[]> {
    news.push(data);
    return news;
  }

  async getNewsAll(): Promise<News[]> {
    return news;
  }

  async getNewsSingle(newsId: number): Promise<News> {
    const entry = news[newsId];
    if (entry) {
      return news[newsId];
    } else throw new Error('Error 404');
  }



  async updateNews(newsId: number, data: News): Promise<News[]> {
    let existingNews = news[data.newsId];
    existingNews = {
      ...existingNews,
      ...data,
    };
    news[data.newsId] = existingNews;
    return news;
  }

  async deleteNews(newsId: number): Promise<News[]> {
    const entry = news[newsId];
    if (entry) {
      news.splice(newsId, newsId);
      return news;
    } else throw new Error('Entry not found!');
  }
}