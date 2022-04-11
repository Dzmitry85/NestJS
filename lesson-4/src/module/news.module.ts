import { Module } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { NewsController } from '../news/news.controller';
import { NewsService } from '../news/news.service';
import { MailController } from '../mail/mail.comtroller';

@Module({
  controllers: [NewsController, MailController],
  providers: [NewsService, MailService],
  exports: [NewsService],
})
export class NewsModule {}
