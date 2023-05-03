import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!!!!';
  }

  getFrontendheader(): string {
    return "<div>This is header Text</div>";
  }

}
