// import { Controller } from '@nestjs/common';
import { Get, Controller, Render } from '@nestjs/common';


@Controller('fryrighthtml')
export class FryrighthtmlController {
    @Get()
    @Render('fryrighthtml.hbs')
    root() {
        return {
            message: {
                a: 'Hello world! !!! ',
                c: "dd",
                html: "<div>kio</div>",
                arr1: [1, 2, 3, 4, 9, 8],
                arr2: [
                    { name: "a", val: 1 },
                    { name: "b", val: 5 },
                    { name: "c", val: 4 },
                    { name: "d", val: 3 },
                    { name: "e", val: 2 },
                    { name: "f", val: 0 },
                ]
            }
        };
    }
}
