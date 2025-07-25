import { CreatePostDto } from "./dto/CreatePost.dto";
import { PostService } from "./posts.service";
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    createPost(createPostDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/Post.schema").Post, {}> & import("../schemas/Post.schema").Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
