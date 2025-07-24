import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/updateUser.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<mongoose.Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllUsers(): mongoose.Query<(mongoose.Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    })[], mongoose.Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("../schemas/users.schema").User, "find", {}>;
    fetchUserById(id: string): Promise<mongoose.Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<mongoose.Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>;
}
