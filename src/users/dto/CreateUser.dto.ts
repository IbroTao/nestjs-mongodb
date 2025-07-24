/* eslint-disable prettier/prettier*/

import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserSettingsDto {
    receiveSMS?: boolean;
    receiveNotifications?: boolean;
    receiveEmails?: boolean;
}
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayName?: string;


    settings?: CreateUserSettingsDto
}   