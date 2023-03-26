import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MycontrollerController } from './mycontroller/mycontroller.controller';
import { MymoduleModule } from './modules/mymodule/mymodule.module';
import { MyserviceService } from './myservice/myservice.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemMonitor, SystemMonitorSchema } from './mycontroller/system_monitoring.schema';
import { SystemmonitorService } from './systemmonitor/systemmonitor.service';
import { SystemmonitorController } from './mycontroller/systemmonitor/systemmonitor.controller';


// mongodb+srv://<username>:<password>@cluster0.y0s0t.mongodb.net/test


@Module({
  imports: [MymoduleModule, MongooseModule.forRoot('mongodb+srv://mMH26CnGbya7TtBW:mMH26CnGbya7TtBW@cluster0.y0s0t.mongodb.net/influx_screenshot_mon'),
    MongooseModule.forFeature([{ name: 'Systemmonitor', schema: SystemMonitorSchema }])],
  controllers: [AppController, MycontrollerController, SystemmonitorController],
  providers: [AppService, MyserviceService, SystemmonitorService],
})
export class AppModule { }
