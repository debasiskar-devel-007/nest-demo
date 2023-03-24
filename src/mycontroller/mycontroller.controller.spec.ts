import { Test, TestingModule } from '@nestjs/testing';
import { MycontrollerController } from './mycontroller.controller';

describe('MycontrollerController', () => {
  let controller: MycontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MycontrollerController],
    }).compile();

    controller = module.get<MycontrollerController>(MycontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
