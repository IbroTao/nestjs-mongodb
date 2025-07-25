/* eslint-disable prettier/prettier*/

import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Post {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    contents: string;
}