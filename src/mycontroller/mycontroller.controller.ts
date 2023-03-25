import { Controller, Get, Query, Req } from '@nestjs/common';
import { MyserviceService } from 'src/myservice/myservice.service';


@Controller('mycontroller')
export class MycontrollerController {
    constructor(private readonly myService: MyserviceService) { }

    @Get()
    findAll(@Query() query): string {
        // let val = { a: 'aa', b: 'bb', c: 'cc' }
        // return JSON.stringify(val);


        return JSON.stringify({ 'result': this.myService.addfunction((query.val1) ? parseFloat(query.val1) : 0, query.val2 ? parseFloat(query.val2) : 0) });

    }
}
