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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("../schemas/users.schema");
const userSettings_schema_1 = require("../schemas/userSettings.schema");
let UserService = class UserService {
    constructor(userModel, userSettingsModel) {
        this.userModel = userModel;
        this.userSettingsModel = userSettingsModel;
    }
    async createUser({ settings, ...createUserDto }) {
        if (settings) {
            const newSettings = new this.userSettingsModel(settings);
            const saveNewSettings = await newSettings.save();
            const newUser = new this.userModel({
                ...createUserDto,
                settings: saveNewSettings._id,
            });
            return newUser.save();
        }
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }
    getUserByUsername(username) {
        return this.userModel.findOne({ username });
    }
    getUsers() {
        return this.userModel.find().populate(['settings', 'posts']);
    }
    getUserById(id) {
        return this.userModel.findById(id).populate(['settings', 'posts']);
    }
    updateUser(id, updateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }
    deleteUser(id) {
        return this.userModel.findByIdAndDelete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(userSettings_schema_1.UserSettings.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model])
], UserService);
//# sourceMappingURL=users.service.js.map