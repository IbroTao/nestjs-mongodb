/* eslint-disable prettier/prettier*/
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-course'), UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
