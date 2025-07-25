/* eslint-disable prettier/prettier*/
import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Param, HttpException, Patch, Delete } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('post')
    @UsePipes(new ValidationPipe())
    async createUser(@Body() createUserDto: CreateUserDto) {
        const existingUser = await this.userService.getUserByUsername(createUserDto.username);
        if(existingUser) throw new HttpException('User already exist', 409)
        const newUser = this.userService.createUser(createUserDto);
        if(!newUser) throw new HttpException('Error', 404);
        return newUser;
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

    @Patch(':id') 
    @UsePipes(new ValidationPipe()) // this is to validate that te user send in the details stipulated in the schema.
    async updateUser(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto) { 
        const isValid = mongoose.Types.ObjectId.isValid(id); // ensure that the id be passed should not just be any random string be must be an instance of Mongoose ObjectId type.
        if(!isValid) throw new HttpException('Invalid ID', 404)
        const updatedUser = this.userService.updateUser(id, updateUserDto);
        if(!updatedUser) throw new HttpException('User not found', 404);
        return updatedUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User not found', 404);
        const deletedUser = await this.userService.deleteUser(id);
        if(!deletedUser) throw new HttpException('User not found', 404);
        return;
    }
}