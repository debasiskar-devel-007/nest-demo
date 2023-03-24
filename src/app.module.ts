import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MycontrollerController } from './mycontroller/mycontroller.controller';

@Module({
  imports: [],
  controllers: [AppController, MycontrollerController],
  providers: [AppService],
})
export class AppModule {}
