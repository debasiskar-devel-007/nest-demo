import { Body, Controller, Delete, Get, Header, HttpStatus, Injectable, Param, Post, Put, Query, Req, Res, Session, UseGuards } from '@nestjs/common';
import { CreateSystemMonitorDto } from 'src/mycontroller/create-systemmonitor.dto';
import { UpdateSystemMonitorDto } from 'src/mycontroller/update-systemmonitor.dto';
import { SystemmonitorService } from 'src/systemmonitor/systemmonitor.service';
import express from 'express';
import fastify from 'fastify';
import { ClsService } from 'nestjs-cls';
import { set } from 'mongoose';
import { RolesGuard } from 'src/roles.guard';

// import * as secureSession from '@fastify/secure-session'
// import { withIronSessionApiRoute } from "iron-session/next";
@Controller('systemmonitor')
@Injectable()
export class SystemmonitorController {

    constructor(private readonly systemmonitorservice: SystemmonitorService, private readonly cls: ClsService) { }

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
    @Get('/ts')
    getViews(@Session() session: { views?: number }) {
        console.log('in ts', session)
        console.log('in ts 2', session)
        session.views = (session.views || 0) + 1;
        // console.log(session.views);
        return session.views;
    }

    @Get('/tc')
    findAll(@Req() request: express.Request) {
        console.log('cookies', request.cookies); // or "request.cookies['cookieKey']"
        // or console.log(request.signedCookies);
        return JSON.stringify(request.cookies);

    }

    @Get('/setcookie')
    setcookie(@Res({ passthrough: true }) response: express.Response) {
        response.cookie('user', 'kio');
        // response.send('cookie set');


    }

    // @Get('/fsc')
    // fsc(@Req() request: FastifyRequest) {
    //     console.log(request.cookies); // or "request.cookies['cookieKey']"
    // }


    @Get('/test')
    // @UseGuards(RolesGuard)
    findOne(@Param('id') id: string) {
        // console.log('test .....');
        // this.cls.set('userId', 'u589uu' + Math.random())
        // this.cls.set('test', 't' + Math.random())
        const userId = this.cls.get('userId');
        const test = this.cls.get('test');
        const userrole = this.cls.get('userrole');
        // console.log(userId, 'userId');
        console.log(userrole, 'userrole', test);
        // console.log('cookei', document.cookie);

        return `This action returns a # param` + userId + '===' + userrole + '---' + test;
    }

    @Get('/auth')
    // @UseGuards(RolesGuard)
    auth(@Param('id') id: string) {
        // console.log('test .....');

        // this.cls.set('userrole', '1')
        const userrole = this.cls.get('userrole');
        // this.cls.set('userId', 'developer')
        const userId = this.cls.get('userId');
        console.log(userrole, 'userrole', userId);
        // return `This action returns a #  auth done`;
        return `This action returns a # param ` + userId + '===' + userrole + '---';

    }


    @Get('/headers')
    @Header("x-user-id", "MyApp")
    async getHelloAlt(@Res() res: express.Response) {
        // return res.setHeader('x-access-token', 1).json({ hello: 'world' });
        // res.cookie('dd', '000000')
        // res.send('cookei set');

        await this.cls.run(async () => {
            this.cls.set('userId', 'cron');
            // await this.someService.doTheThing();
        });


        // res.setHeader('Authorization', 'Bearer ' + 'dddd');
        res.send({
            success: true,
            'ddd': 'nnnn'
        })
    }

    // @Get('/testsession')
    // findSession(@Session() session: secureSession.Session,
    //     @Res() response: express.Response,
    // ) {
    //     let visits = 0;
    //     console.log(visits, 'bf');
    //     if (session != null && session.get('visits') != null) visits = session.get('visits');
    //     console.log(visits, 'af');
    //     session.set('visits', visits ? visits + 1 : 1);
    //     visits = session.get('visits');

    //     response.send(JSON.stringify(visits));

    // }

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
