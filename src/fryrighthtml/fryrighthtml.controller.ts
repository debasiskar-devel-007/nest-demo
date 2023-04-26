// import { Controller } from '@nestjs/common';
import { Get, Controller, Render } from '@nestjs/common';


@Controller('fryrighthtml')
export class FryrighthtmlController {
    @Get()
    @Render('fryrighthtml.hbs')
    root() {
        return { message: { a: 'Hello world! !!! ', c: "dd" } };
    }
}
