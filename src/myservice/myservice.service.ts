import { Injectable } from '@nestjs/common';

@Injectable()
export class MyserviceService {
    addfunction(val1: any, val2: any): any {
        return Number(Number(val1) + Number(val2));
    }
}
