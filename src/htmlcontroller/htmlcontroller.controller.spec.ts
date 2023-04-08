import { Test, TestingModule } from '@nestjs/testing';
import { HtmlcontrollerController } from './htmlcontroller.controller';

describe('HtmlcontrollerController', () => {
  let controller: HtmlcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HtmlcontrollerController],
    }).compile();

    controller = module.get<HtmlcontrollerController>(HtmlcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
