import { Model } from "mongoose";
import { Post } from "src/schemas/Post.schema";
import { CreatePostDto } from "./dto/CreatePost.dto";
export declare class PostService {
    private postModel;
    constructor(postModel: Model<Post>);
    createPost(createPostDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, Post, {}> & Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findPostById(): void;
}
