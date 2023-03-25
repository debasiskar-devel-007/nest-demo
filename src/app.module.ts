import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MycontrollerController } from './mycontroller/mycontroller.controller';
import { MymoduleModule } from './modules/mymodule/mymodule.module';
import { MyserviceService } from './myservice/myservice.service';




@Module({
  imports: [MymoduleModule],
  controllers: [AppController, MycontrollerController],
  providers: [AppService, MyserviceService],
})
export class AppModule { }
