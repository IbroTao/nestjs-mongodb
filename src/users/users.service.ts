/* eslint-disable prettier/prettier*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../users/dto/CreateUser.dto"
import { User } from "src/schemas/users.schema";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UserService {
    constructor( @InjectModel(User.name) private userModel: Model<User>) {}
    
    createUser(createUserDto: CreateUserDto) {
        const newUser = new this.userModel(createUserDto);
        return newUser.save()
    }

    getUsers() {
        return this.userModel.find()
    }

    getUserById(id: string) {
        return this.userModel.findById(id);
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true})
    }
}