import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSystemMonitorDto } from 'src/mycontroller/create-systemmonitor.dto';
import { ISSystemMonitoring } from 'src/mycontroller/system_monitoring.interface';
import { Model } from "mongoose";
import { UpdateSystemMonitorDto } from 'src/mycontroller/update-systemmonitor.dto';

@Injectable()
export class SystemmonitorService {
    constructor(@InjectModel('Systemmonitor') private Systemmonitormodel: Model<ISSystemMonitoring>) { }
    async createsysemmonitor(CreateSystemMonitorDto: CreateSystemMonitorDto): Promise<ISSystemMonitoring> {
        const newsystemmonitor = await new this.Systemmonitormodel(CreateSystemMonitorDto);
        return newsystemmonitor.save();
    }
    async updatesystemmonitor(systemmonitorid: string, updateSystemMonitorDto: UpdateSystemMonitorDto): Promise<ISSystemMonitoring> {
        const existingrecord = await this.Systemmonitormodel.findByIdAndUpdate(systemmonitorid, updateSystemMonitorDto, { new: true });
        if (!existingrecord) {
            throw new NotFoundException(` #${systemmonitorid} not found`);
        }
        return existingrecord;
    }
    async getAlldata(): Promise<ISSystemMonitoring[]> {
        const data = await this.Systemmonitormodel.find().lean();
        if (!data || data.length == 0) {
            throw new NotFoundException(' data not found!');
        }
        return data;
    }

    async getAggregatedata(): Promise<ISSystemMonitoring[]> {
        const data = await this.Systemmonitormodel.aggregate([
            {
                '$addFields': {
                    'mac_address': {
                        '$concat': [
                            '$mac_address', ' - ', 'Test'
                        ]
                    }
                }
            }
        ]);
        if (!data || data.length == 0) {
            throw new NotFoundException(' data not found!');
        }
        return data;
    }
    async getdatabyid(systemmonitorid: string): Promise<ISSystemMonitoring> {
        const existingrecord = await this.Systemmonitormodel.findById(systemmonitorid).exec();
        if (!existingrecord) {
            throw new NotFoundException(`Data #${systemmonitorid} not found`);
        }
        return existingrecord;
    }
    async deletedata(systemmonitorid: string): Promise<ISSystemMonitoring> {
        const deleteddata = await this.Systemmonitormodel.findByIdAndDelete(systemmonitorid);
        if (!deleteddata) {
            throw new NotFoundException(` #${systemmonitorid} not found`);
        }
        return deleteddata;
    }
}
