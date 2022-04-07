import { Injectable } from '@nestjs/common';
import { Calculator } from '../interfance/calc.interface';

const calc: Calculator[] = [];


@Injectable()
export class calcService {
  private readonly calc: Calculator[] = [];

  async summ(data: Calculator): Promise<string> {
    const result = data.num1 + data.num2;
    const operationEntry = { 
      ...data, 
      type: 'summa', 
      result: result };
    calc.push(operationEntry);
    return `Результат сложения: ${result}`;
  }

  async diff(data: Calculator): Promise<string> {
    const result = data.num1 - data.num2;
    const operationEntry = { 
      ...data, 
        type: 'diff', 
        result: result };
    calc.push(operationEntry);
    return `Результат разности: ${result}`;
  }

  async mult(data: Calculator): Promise<string> {
    const result = data.num1 * data.num2;
    const operationEntry = { 
      ...data, 
      type: 'mult', 
      result: result };
    calc.push(operationEntry);
    return `Результат умноженя: ${result}`;
  }

  async div(data: Calculator): Promise<string> {
    const result = data.num1 / data.num2;
    const operationEntry = { 
      ...data, 
      type: 'division', 
      result: result };
    calc.push(operationEntry);
    return `Результат деления: ${result}`;
  }
}
