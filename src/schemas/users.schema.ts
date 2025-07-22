/* eslint-disable prettier/prettier*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop({required: true, unique: true})
    username: string;

    @Prop({required: false})
    displayName?: string;


    @Prop()
    avatarUrl?: string;
}


export const UserSchema = SchemaFactory.createForClass(User);