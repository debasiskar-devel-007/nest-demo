import { Test, TestingModule } from '@nestjs/testing';
import { MymoduleserviceService } from './mymoduleservice.service';

describe('MymoduleserviceService', () => {
  let service: MymoduleserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MymoduleserviceService],
    }).compile();

    service = module.get<MymoduleserviceService>(MymoduleserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
