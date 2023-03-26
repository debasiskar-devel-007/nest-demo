import { PartialType } from '@nestjs/mapped-types';
import { CreateSystemMonitorDto } from './create-systemmonitor.dto';
export class UpdateSystemMonitorDto extends PartialType(CreateSystemMonitorDto) { }