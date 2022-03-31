import { Test, TestingModule } from '@nestjs/testing';
import { calcService } from './calc.service';

describe('NewsService', () => {
  let service: calcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [calcService],
    }).compile();

    service = module.get<calcService>(calcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
