/* eslint-disable prettier/prettier*/

import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateUserSettingsDto {
    @IsOptional()
    @IsBoolean()
    receiveSMS?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveNotifications?: boolean;

    @IsOptional()
    @IsBoolean()
    receiveEmails?: boolean;
}
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayName?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateUserSettingsDto)
    settings?: CreateUserSettingsDto
}   