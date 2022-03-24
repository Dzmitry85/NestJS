import { Injectable } from '@nestjs/common';

// @Injectable()
// export class NewsService {}
import { News } from '../interfance/news.interface';
const news: News[] = [
  {
    id: 1,
    title: 'QWER',
    description: 'qwerety',
    author: 'name',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  },
];
@Injectable()
export class NewsService {
  // private readonly

  // create(news: News): number {
  // return this.news.push(news);
  // }

  async createNews(data: News): Promise<News[]> {
    news.push(data);
    return news;
  }

  async findAll(): Promise<News[]> {
    return news;
  }

  async oneNews(id: number): Promise<News> {
    return news[id - 1];
  }

  async updateNews(id: number, data: News): Promise<News[]> {
    const _id = id - 1;
    let exNews = news[_id];
    exNews = {
      ...exNews,
      ...data,
    };
    news[_id] = exNews;
    return news;
  }

  async deleteNews(id: number): Promise<News[]> {
    const entry = news[id];
    if (entry) {
      news.splice(id, id);
      return news;
    } else throw new Error('Entry not found!');
  }
}
