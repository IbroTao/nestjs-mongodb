/* eslint-disable prettier/prettier*/

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/users.schema";
import { UserService } from "./users.service";
import { UserController } from './users.controller';
import { UserSettings, userSettingsSchema } from "src/schemas/userSettings.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            },
            {
                name: UserSettings.name,
                schema: userSettingsSchema
            }
    ])
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}