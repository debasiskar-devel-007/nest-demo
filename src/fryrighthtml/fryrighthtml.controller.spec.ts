import { Test, TestingModule } from '@nestjs/testing';
import { FryrighthtmlController } from './fryrighthtml.controller';

describe('FryrighthtmlController', () => {
  let controller: FryrighthtmlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FryrighthtmlController],
    }).compile();

    controller = module.get<FryrighthtmlController>(FryrighthtmlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
