import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import session from 'express-session';
// import secureSession from '@fastify/secure-session';
// import cookieParser from 'cookie-parser';
// import { IronSession } from "iron-session";
// import fastifyCookie from '@fastify/cookie';
async function bootstrap() {
  // const app = await NestFactory.create<NestExpressApplication>(
  //   AppModule,
  // );


  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );


  // await app.register(secureSession, {
  //   secret: 'averylogphrasebiggerthanthirtytwochars',
  //   salt: 'mq9hDxBVDbspDR6n',
  // });

  // await app.register(fastifyCookie, {
  //   secret: 'my-secret', // for cookies signature
  // });

  app.enableCors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
    ],
  });
  // app.use(cookieParser());

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      // saveUninitialized: true,
    }),
  );


  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });


  app.useGlobalPipes(new ValidationPipe());
  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('hbs');
  await app.listen(4000);
}
bootstrap();
