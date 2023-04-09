import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ClsService } from 'nestjs-cls';
import { RolesGuard } from './roles.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private cls: ClsService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  // @UseGuards(RolesGuard)
  findOne(@Param('id') id: string) {
    // console.log('test .....');
    // this.cls.set('userId', 'u589uu' + Math.random())
    // this.cls.set('test', 't' + Math.random())
    const userId = this.cls.get('userId');
    const test = this.cls.get('test');
    const userrole = this.cls.get('userrole');
    // console.log(userId, 'userId');
    console.log(userrole, 'userrole', test);

    return `This action returns a # param  ` + userId + ' role ===' + userrole + '---' + test;
  }
}
