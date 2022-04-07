import { Module } from '@nestjs/common';
import { calcController } from '../calculator/calc.controller';
import { calcService } from '../calculator/calc.service';

@Module({
  controllers: [calcController],
  providers: [calcService],
  exports: [calcService]
})
export class calcModule {}
