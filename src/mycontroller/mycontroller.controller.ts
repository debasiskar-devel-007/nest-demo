import { Body, Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { MyserviceService } from 'src/myservice/myservice.service';


@Controller('mycontroller')
export class MycontrollerController {
    constructor(private readonly myService: MyserviceService) { }

    @Get()
    findAll(@Query() query): string {
        // let val = { a: 'aa', b: 'bb', c: 'cc' }
        // return JSON.stringify(val);


        return JSON.stringify({ 'result': this.myService.addfunction((query.val1) ? Number(query.val1) : 0, query.val2 ? Number(query.val2) : 0) });

    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} param`;
    }

    @Post()
    create(@Body() data: any) {
        console.log(data);
        return 'data by post : ' + JSON.stringify(data);
    }
}
