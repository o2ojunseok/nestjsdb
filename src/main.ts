import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  app.enableCors({
    origin: ['*'],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  });

  app.use(
    session({
      secret: 'guava', // session Id
      resave: false, // 세션이 수정되지 않아도 지속 저장
      saveUninitialized: false, // 초기화 되지 않는 세션 저장
    })
  )
  await app.listen(3000);
}
bootstrap();
