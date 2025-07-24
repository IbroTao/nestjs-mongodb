"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const CreateUser_dto_1 = require("./dto/CreateUser.dto");
const mongoose_1 = require("mongoose");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    getAllUsers() {
        return this.userService.getUsers();
    }
    async fetchUserById(id) {
        const isValid = mongoose_1.default.Types.ObjectId.isValid(id);
        if (!isValid)
            throw new common_1.HttpException('User not found', 404);
        const findUser = await this.userService.getUserById(id);
        if (!findUser)
            throw new common_1.HttpException('User not found!', 404);
        return findUser;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('post'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "fetchUserById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __metadata("design:type", Object)
], UserController.prototype, "", void 0);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserController);
{
    updateUser();
    {
    }
}
//# sourceMappingURL=users.controller.js.map