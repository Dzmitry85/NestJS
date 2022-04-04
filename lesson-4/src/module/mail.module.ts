import { Module } from '@nestjs/common';
import { MailService } from '../mail/mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailController } from '../mail/mail.comtroller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport:
        'smtps://gbtestar@mail.ru:NjR9H80tdgTLmfhj2qWG@smtp.mail.ru',
      defaults: {
        from: '"NestJS робот" <gbtestar@mail.ru>',
      },
      template: {
        dir: join(__dirname, '../..', 'views/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService],
})
export class MailModule {}