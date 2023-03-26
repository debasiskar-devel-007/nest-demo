import { Test, TestingModule } from '@nestjs/testing';
import { SystemmonitorController } from './systemmonitor.controller';

describe('SystemmonitorController', () => {
  let controller: SystemmonitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemmonitorController],
    }).compile();

    controller = module.get<SystemmonitorController>(SystemmonitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
