import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Bingo API')
    .setDescription('The Bingo API description. Github sources at https://github.com/alexandru360/PresentationBingoCards/')
    .setVersion('1.0')
    .addTag('Bingo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  const port: string = process.env.PORT || '3000';
  await app.listen(parseInt(port, 10));
}
bootstrap();
