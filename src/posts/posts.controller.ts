/* eslint-disable prettier/prettier*/
import { Body, Controller, Post } from "@nestjs/common";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { PostService } from "./posts.service";

@Controller('posts')
export class PostController {
    constructor(private postService: PostService) {}

    @Post('create')
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postService.createPost(createPostDto);
    }
}