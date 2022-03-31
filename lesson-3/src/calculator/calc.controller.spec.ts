import { Test, TestingModule } from '@nestjs/testing';
import { calcController } from './calc.controller';

describe('calcController', () => {
  let controller: calcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [calcController],
    }).compile();

    controller = module.get<calcController>(calcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
