import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/users.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): void;
}
