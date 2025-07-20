/* eslint-disable prettier/prettier*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function runApp() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
runApp();
