/* eslint-disable prettier/prettier*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/schemas/Post.schema";
import { CreatePostDto } from "./dto/CreatePost.dto";

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

    createPost(createPostDto: CreatePostDto) {
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }
}
