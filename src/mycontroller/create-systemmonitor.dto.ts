import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateSystemMonitorDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly fullname: string;
    @IsNumber()
    @IsNotEmpty()
    readonly user_id: number;

    @IsNumber()
    @IsNotEmpty()
    readonly monitor_status: number;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly empl_no: string;
    @IsNumber()
    @IsNotEmpty()
    readonly monitor_sleep_time: number;
}