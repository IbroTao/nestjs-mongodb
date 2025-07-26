import { Model } from "mongoose";
import { Post } from "src/schemas/Post.schema";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { User } from "src/schemas/users.schema";
export declare class PostService {
    private postModel;
    private userModel;
    constructor(postModel: Model<Post>, userModel: Model<User>);
    createPost(createPostDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, Post, {}> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findPostById(): void;
}
