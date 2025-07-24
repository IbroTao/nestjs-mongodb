/* eslint-disable prettier/prettier*/
import { Prop, Schema } from "@nestjs/mongoose";


@Schema()
export class UserSettings {
    @Prop()
    receiveNotifications?: boolean;
}