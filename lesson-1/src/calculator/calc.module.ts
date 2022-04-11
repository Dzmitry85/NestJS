import { Module } from '@nestjs/common';
import { calcController } from './calc.controller';
import { calcService } from './calc.service';

@Module({
  controllers: [calcController],
  providers: [calcService],
})
export class NewsModule {}
