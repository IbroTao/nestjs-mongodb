/* eslint-disable prettier/prettier*/

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/users.schema";
import { UserService } from "./users.service";
import { UsersController } from './users/users.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        }])
    ],
    providers: [UserService],
    controllers: [UsersController],
})
export class UserModule {}