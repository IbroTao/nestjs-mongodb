import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllUsers(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("../schemas/users.schema").User, {}> & import("../schemas/users.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("../schemas/users.schema").User, "find", {}>;
}
