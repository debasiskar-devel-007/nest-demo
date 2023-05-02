import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  const hbs = require("hbs");
  const path = require("path")

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  // hbs.registerPartials(__dirname + '/views/partials');
  hbs.registerPartials(join(__dirname, "..", "views/partials/"));


  await app.listen(4000);
}
bootstrap();