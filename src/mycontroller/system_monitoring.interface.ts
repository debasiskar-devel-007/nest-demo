import { Document } from 'mongoose';
export interface ISSystemMonitoring extends Document {
    readonly mac_address: string;

    readonly user_id: number;
    readonly fullname: string;

    readonly on_datetime: string;

    readonly on_time: string;

    readonly on_date: string;

    readonly monitor_status: number;

    readonly empl_no: number;

    readonly monitor_sleep_time: number;

    readonly created_datetime: number;
}