/* eslint-disable prettier/prettier*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class UserSettings {
    @Prop({required: false})
    receiveNotifications?: boolean;

    @Prop({required: false})
    receiveEmails?: boolean;

    @Prop({required: false})
    receiveSMS?: boolean;
}

export const userSettingsSchema = SchemaFactory.createForClass(UserSettings);