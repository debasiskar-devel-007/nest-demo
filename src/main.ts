import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { create } from 'express-handlebars';
// import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );
  // const hbs = require("hbs");
  const path = require("path")

  // app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  // app.setViewEngine('hbs');
  // hbs.registerPartials(__dirname + '/views/partials');
  // hbs.registerPartials(join("/home/garvis/Documents/Projects/nest/nest-demo/views/partials/"));




  const hbs = create({
    // Specify helpers which are only registered on this instance.
    helpers: {
      foo() { return 'FOO!'; },
      bar() { return 'BAR!'; }
    },
    partialsDir: [
      // "shared/templates/",
      "./views/partials/",
    ],
  });

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
  app.set('views', './views');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // app.use("/assets", express.static(__dirname + "/public"))
  // app.use(express.static(path.join(__dirname, '..', './public/')))



  await app.listen(4000);
}
bootstrap();