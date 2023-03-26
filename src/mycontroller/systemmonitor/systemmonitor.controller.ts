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

}
