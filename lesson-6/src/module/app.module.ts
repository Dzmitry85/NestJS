import { Module } from '@nestjs/common';
import { NewsModule } from './news.module';
import { calcModule } from './calc.module';
import { CommentsModule } from './commets.module'; 
import { NewsController } from 'src/news/news.controller';
import { calcController } from 'src/calculator/calc.controller';
import { CommentsController } from 'src/comments/comments.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MailModule } from './mail.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from '../module/user.module';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../module/auth.module';
import { AppController } from '../app.controller';
import {  JwtService } from '@nestjs/jwt';




@Module({
  imports: [NewsModule, 
    calcModule, 
    CommentsModule, 
    MulterModule.register({ dest: './upload' }), 
    MailModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'gb-base',
      password: '1111',
      database: 'news_db',
      entities: [],
       synchronize: true,
      autoLoadEntities: true,
    })],
  controllers: [NewsController, calcController, CommentsController,AppController],
  providers: [Array, AuthService, JwtService]
})
export class AppModule { constructor(private connection: Connection) {}}

