/* eslint-disable prettier/prettier*/
import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";


@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('post')
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
    }
}