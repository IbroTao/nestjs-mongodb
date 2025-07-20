/* eslint-disable prettier/prettier*/
import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";


@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('post')
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
    }
}