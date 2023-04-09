import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';
import { SystemmonitorService } from './systemmonitor/systemmonitor.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private cls: ClsService, private systemmonitorservice: SystemmonitorService) { }
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {

        console.log('RolesGuard');
        const userrole = this.cls.get('userrole');
        const userId = this.cls.get('userId');
        let uid = this.systemmonitorservice.getclsdata();
        console.log('userrole', userrole, userId, 'service uid ', uid);
        if (userrole == '1') return true

        return false;
    }
}
