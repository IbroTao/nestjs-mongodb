/* eslint-disable prettier/prettier*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function testApp() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
testApp();
