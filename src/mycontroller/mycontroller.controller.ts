import { Controller, Get } from '@nestjs/common';

@Controller('mycontroller')
export class MycontrollerController {
    @Get()
    findAll(): string {
        return 'This action returns  mycontroller';
    }
}
