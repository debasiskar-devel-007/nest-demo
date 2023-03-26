import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateSystemMonitorDto } from 'src/mycontroller/create-systemmonitor.dto';
import { UpdateSystemMonitorDto } from 'src/mycontroller/update-systemmonitor.dto';
import { SystemmonitorService } from 'src/systemmonitor/systemmonitor.service';

@Controller('systemmonitor')
export class SystemmonitorController {

    constructor(private readonly systemmonitorservice: SystemmonitorService) { }

    @Post()
    async createRecord(@Res() response, @Body() CreateSystemMonitorDto: CreateSystemMonitorDto) {
        try {
            const newrecord = await this.systemmonitorservice.createsysemmonitor(CreateSystemMonitorDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Record has been created successfully',
                newrecord,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Record not created!',
                error: 'Bad Request' + err
            });
        }
    }
    @Get()
    async getRecords(@Res() response) {
        try {
            const data = await this.systemmonitorservice.getAlldata();
            return response.status(HttpStatus.OK).json({
                message: 'All  data found successfully', data,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Get('/:id')
    async getdata(@Res() response, @Param('id') recordId: string) {
        try {
            const existingRecord = await
                this.systemmonitorservice.getdatabyid(recordId);
            return response.status(HttpStatus.OK).json({
                message: 'Record found successfully', existingRecord,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteRecord(@Res() response, @Param('id') recordId: string) {
        try {
            const deletedRecord = await this.systemmonitorservice.deletedata(recordId);
            return response.status(HttpStatus.OK).json({
                message: 'Record deleted successfully',
                deletedRecord,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }


    @Put('/:id')
    async updateRecord(@Res() response, @Param('id') recordId: string,
        @Body() updatedto: UpdateSystemMonitorDto) {
        try {
            const existingrecord = await this.systemmonitorservice.updatesystemmonitor(recordId, updatedto);
            return response.status(HttpStatus.OK).json({
                message: 'record has been successfully updated',
                existingrecord,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

}