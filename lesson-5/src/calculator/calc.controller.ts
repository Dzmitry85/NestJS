import { Body, Controller, Get, Header, Put } from '@nestjs/common';

import { Calculator } from '../dto/calc.dto';
import { calcService } from './calc.service';

@Controller('news')
export class calcController {
 
  constructor(private calcService: calcService) {}
 
  @Put('summa')
  @Header('Summ-of-num1-and-num2', 'none')
  async createNews(@Body() body: Calculator): Promise<string> {
    return this.calcService.summ(body);
  }
  
  @Put('division')
  @Header('Division-of-num1-and-num2', 'none')
  async div(@Body() body: Calculator): Promise<string> {
    return this.calcService.div(body);
  }

  @Put('mult')
  @Header('Multiply-of-num1-and-num2', 'none')
  async mult(@Body() body: Calculator): Promise<string> {
    return this.calcService.mult(body);
  }

  @Put('diff')
  @Header('Difference-of-num1-and-num2', 'none')
  async diff(@Body() body: Calculator): Promise<string> {
    return this.calcService.diff(body);
  }
}
