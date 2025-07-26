/* eslint-disable prettier/prettier*/

import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post } from "src/schemas/Post.schema";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { User } from "src/schemas/users.schema";

@Injectable()
export class PostService {
    constructor(
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async createPost( { userId, ...createPostDto }: CreatePostDto) {
        const findUser = await this.userModel.findById(userId);
        if(!findUser) throw new HttpException("User not found", 404);
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }

    findPostById() {}
}
