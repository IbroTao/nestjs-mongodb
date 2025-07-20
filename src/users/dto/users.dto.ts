/* eslint-disable prettier/prettier*/

import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    displayName?: string;
}   