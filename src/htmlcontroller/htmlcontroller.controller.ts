// import { Controller } from '@nestjs/common';
import { Get, Controller, Render } from '@nestjs/common';

@Controller('htmlcontroller')
export class HtmlcontrollerController {
    @Get()
    @Render('index.hbs')
    root() {
        return { message: 'Hello world!' };
    }
}
