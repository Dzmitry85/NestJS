
import { Injectable } from '@nestjs/common';
import { News, loadNews } from '../dto/news.dto';
import { MailService } from 'src/mail/mail.service';

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
        avatar: '',
      },
      {
        commentsId: 2,
        description: '2 comment text',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        avatar: '',
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
        description: 'comment text 2/1',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        avatar: '',
      },
    ],
  },
];

let newsId = 3;

@Injectable()
export class NewsService {
  constructor(private mailService: MailService) {}
  
  private readonly news: News[] = [];

  async createNews(data: loadNews): Promise<News[]> {
    const newNewsEntry: News = {
      ...data,
      newsId: newsId,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };
    newsId++;
    news.push(newNewsEntry);
    return news;
  }

  async getNewsAll(): Promise<News[]> {
    return news;
  }

  getNewsSingle(newsId: number): News {
    const entry = news[newsId];
    if (entry) {
         return { ...entry };
    } else throw new Error('Error 404: Entry not found!');
  }
  
   async updateNews(newsId: number, data: News): Promise<News> {
    let existingNews = news[data.newsId];
    existingNews = {
      ...existingNews,
      ...data,
      updatedAt: new Date(Date.now()),
    };
    news[data.newsId] = existingNews;
    this.mailService.sendTestMail(news[newsId]);
    return news[newsId];
  }

  async deleteNews(newsId: number): Promise<News[]> {
    const entry = news[newsId];
    if (entry) {
      news.splice(newsId, newsId);
      return news;
    } else throw new Error('Entry not found!');
  }
}