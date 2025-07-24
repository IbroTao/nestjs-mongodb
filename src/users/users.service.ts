/* eslint-disable prettier/prettier*/

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../users/dto/CreateUser.dto"
import { User } from "src/schemas/users.schema";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UserSettings } from "src/schemas/userSettings.schema";

@Injectable()
export class UserService {
    constructor( @InjectModel(User.name) private userModel: Model<User>, @InjectModel(UserSettings.name) private userSettingsModel: Model<UserSettings>) {}
    
    async createUser({settings, ...createUserDto}: CreateUserDto) {
        if(settings) {
            const newSettings = new this.userSettingsModel(settings);
            const saveNewSettings = await newSettings.save();
            const newUser = new this.userModel({
                ...createUserDto,
                settings: saveNewSettings._id,
            })
        }
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

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}