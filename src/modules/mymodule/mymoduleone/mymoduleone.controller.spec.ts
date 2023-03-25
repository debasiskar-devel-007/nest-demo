import { Test, TestingModule } from '@nestjs/testing';
import { MymoduleoneController } from './mymoduleone.controller';

describe('MymoduleoneController', () => {
  let controller: MymoduleoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MymoduleoneController],
    }).compile();

    controller = module.get<MymoduleoneController>(MymoduleoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
