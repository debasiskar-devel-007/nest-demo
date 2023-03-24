import { Controller, Get } from '@nestjs/common';

@Controller('mycontroller')
export class MycontrollerController {
    @Get()
    findAll(): string {
        let val = { a: 'aa', b: 'bb' }
        return JSON.stringify(val);
    }
}
