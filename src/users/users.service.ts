/* eslint-disable prettier/prettier*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/users.schema";
import { CreateUserDto } from "./dto/users.dto";

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
}