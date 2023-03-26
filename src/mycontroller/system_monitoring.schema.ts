import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
@Schema()
export class SystemMonitor {
    @Prop()
    mac_address: string;
    @Prop()
    user_id: number;
    @Prop()
    fullname: string;
    @Prop()
    on_datetime: string;
    @Prop()
    on_time: string;
    @Prop()
    on_date: string;
    @Prop()
    monitor_status: number;
    @Prop()
    empl_no: number;
    @Prop()
    monitor_sleep_time: number;
    @Prop()
    created_datetime: number;
}
export const SystemMonitorSchema = SchemaFactory.createForClass(SystemMonitor);