import { Test, TestingModule } from '@nestjs/testing';
import { SystemmonitorService } from './systemmonitor.service';

describe('SystemmonitorService', () => {
  let service: SystemmonitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemmonitorService],
    }).compile();

    service = module.get<SystemmonitorService>(SystemmonitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
