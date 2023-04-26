import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
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
    options: {
      partials: {
        header: 'partials/header.hbs',
        footer: 'partials/footer.hbs'
      }
    }


  });
  // app.registerPartials
  await app.listen(3000);
}
bootstrap();