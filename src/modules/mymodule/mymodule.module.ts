import { Module } from '@nestjs/common';
import { MymoduleoneController } from './mymoduleone/mymoduleone.controller';
import { MymoduleserviceService } from './mymoduleservice/mymoduleservice.service';

@Module({
  controllers: [MymoduleoneController],
  providers: [MymoduleserviceService]
})
export class MymoduleModule {}
