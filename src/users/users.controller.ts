/* eslint-disable prettier/prettier*/
import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Param, HttpException, Patch } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('post')
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        // console.log(createUserDto);
        return this.userService.createUser(createUserDto)
    }

    @Get('all')
    getAllUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    async fetchUserById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User not found', 404)
        const findUser = await this.userService.getUserById(id);
        if (!findUser) throw new HttpException('User not found!', 404);
        return findUser;
    }

    @Patch(':id') {
        updateUser() {

        }
    }
}