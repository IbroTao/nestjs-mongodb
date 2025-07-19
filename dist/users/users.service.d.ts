import { Model } from "mongoose";
import { User } from "src/schemas/users.schema";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(): void;
}
