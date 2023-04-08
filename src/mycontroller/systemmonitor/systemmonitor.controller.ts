import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, Res, Session } from '@nestjs/common';
import { CreateSystemMonitorDto } from 'src/mycontroller/create-systemmonitor.dto';
import { UpdateSystemMonitorDto } from 'src/mycontroller/update-systemmonitor.dto';
import { SystemmonitorService } from 'src/systemmonitor/systemmonitor.service';
import express from 'express';
import * as secureSession from '@fastify/secure-session'
@Controller('systemmonitor')
export class SystemmonitorController {

    constructor(private readonly systemmonitorservice: SystemmonitorService) { }

    @Post()
    async createRecord(@Res() response, @Body() CreateSystemMonitorDto: CreateSystemMonitorDto) {
        try {
            const newrecord = await this.systemmonitorservice.createsysemmonitor(CreateSystemMonitorDto);
            // return response.status(HttpStatus.CREATED).json({
            //     message: 'Record has been created successfully',
            //     newrecord,
            // });
            return `This action returns a # param`;

        } catch (err) {
            // return response.status(HttpStatus.BAD_REQUEST).json({
            //     statusCode: 400,
            //     message: 'Error: Record not created!',
            //     error: 'Bad Request' + err
            // });
            return `This action returns a # errro`;

        }
    }
    @Get('/test')
    findOne(@Param('id') id: string) {
        return `This action returns a # param`;
    }

    @Get('/testsession')
    findSession(@Session() session: secureSession.Session,
        @Res() response: express.Response,
    ) {
        let visits = session.get('visits');
        session.set('visits', visits ? visits + 1 : 1);
        visits = session.get('visits');

        response.send(JSON.stringify(visits));

    }

    @Get('/getdata')
    async getAllCategories(
        @Req() request: express.Request,
        @Res() response: express.Response,
    ) {
        console.log(`${request.method} ${request.url}`); // GET /categories

        const data = await this.systemmonitorservice.getAggregatedata();
        response.send(JSON.stringify(data));
    }

    @Get('/getaggregate')
    async getaggregate(
        @Req() request: express.Request,
        @Res() response: express.Response,
    ) {
        console.log(`${request.method} ${request.url}`); // GET /categories

        const data = await this.systemmonitorservice.getAlldata();
        response.send(JSON.stringify(data));
    }

    @Get('/alldata')
    async getRecords(
        @Req() request: express.Request,
        @Res() response: express.Response
    ) {

        const data = await this.systemmonitorservice.getAlldata();
        console.log('dddd');
        response.send(JSON.stringify(data));
    }

    @Get('/getall')
    async getRecords2(@Res() response) {
        try {
            const data = await this.systemmonitorservice.getAlldata();
            return response.status(200).json({
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
            return response.status(200).json({
                message: 'Record found successfully', existingRecord,
            });
        } catch (err) {
            // return response.status(204).json(err);
            return `This action returns a #$ param`;

        }
    }
    @Delete('/:id')
    async deleteRecord(@Res() response, @Param('id') recordId: string) {
        try {
            const deletedRecord = await this.systemmonitorservice.deletedata(recordId);
            return response.status(200).json({
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
            return response.status(200).json({
                message: 'record has been successfully updated',
                existingrecord,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

}
