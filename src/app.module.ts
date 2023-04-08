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
import { ConfigModule } from '@nestjs/config';
import { HtmlcontrollerController } from './htmlcontroller/htmlcontroller.controller';
import { FryrighthtmlController } from './fryrighthtml/fryrighthtml.controller';
import { NestSessionOptions, SessionModule } from 'nestjs-session';


// mongodb+srv://<username>:<password>@cluster0.y0s0t.mongodb.net/test


@Module({
  imports: [MymoduleModule, MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.CONNECTION_STRING,
    }),

  }),
    MongooseModule.forFeature([{ name: 'Systemmonitor', schema: SystemMonitorSchema }]), ConfigModule.forRoot({ envFilePath: '.env' }),
    SessionModule.forRoot({
      session: { secret: 'keyboard cat' },
    }),


  ],
  controllers: [AppController, MycontrollerController, SystemmonitorController, HtmlcontrollerController, FryrighthtmlController],
  providers: [AppService, MyserviceService, SystemmonitorService],
})
export class AppModule { }
