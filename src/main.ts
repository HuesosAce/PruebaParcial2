import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const opciones = new DocumentBuilder()
    .setTitle('GYM API')
    .setDescription('Documentacion GYM API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, opciones);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });
  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
