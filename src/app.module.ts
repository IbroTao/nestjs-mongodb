/* eslint-disable prettier/prettier*/
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-course'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
