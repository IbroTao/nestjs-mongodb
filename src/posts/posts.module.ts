/* eslint-disable prettier/prettier*/

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/schemas/Post.schema";
import { PostService } from "./posts.service";
import { PostController } from "./posts.controller";

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: Post.name,
            schema: PostSchema
        }
    ])],
    providers: [PostService],
    controllers: [PostController]
})
export class PostModule {}