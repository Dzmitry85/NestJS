import { Module } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { NewsController } from '../news/news.controller';
import { NewsService } from '../news/news.service';
import { MailController } from '../mail/mail.comtroller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from 'src/database/news.entity';
import { RolesGuard } from '../auth/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { UsersService } from '../user/user.service';
import { UsersEntity } from '../database/user.entity';
import { AuthModule } from '../module/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity]),
  TypeOrmModule.forFeature([UsersEntity]),
  AuthModule,],
  controllers: [NewsController, MailController],
  providers: [ NewsService,
    MailService,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }],
  exports: [NewsService],
})
export class NewsModule {}
