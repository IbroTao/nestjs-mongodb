/* eslint-disable prettier/prettier*/
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSettings } from "./userSettings.schema";
import { Post } from "./Post.schema";


@Schema()
export class User {
    @Prop({required: true, unique: true})
    username: string;

    @Prop({required: false})
    displayName?: string;


    @Prop({required: false})
    avatarUrl?: string;

    @Prop({type: mongoose.Types.ObjectId, ref: 'UserSettings'})
    settings?: UserSettings;

    @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Post' }] })
    post: Post[];
}


export const UserSchema = SchemaFactory.createForClass(User);