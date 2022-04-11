import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
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




@Module({
  imports: [NewsModule, 
    calcModule, 
    CommentsModule, 
    MulterModule.register({ dest: './upload' }), 
    MailModule,
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
  controllers: [NewsController, calcController, CommentsController],
  providers: [AppService]
})
export class AppModule { constructor(private connection: Connection) {}}
