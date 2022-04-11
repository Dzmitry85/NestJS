import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { NewsEntity } from 'src/database/news.entity';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendTestMail(news: NewsEntity) {
    return this.mailerService
      .sendMail({
        to: 'gb-test-nestjs',
        subject: 'Создание нового комментария!',
        template: 'test',
        context: news,
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
