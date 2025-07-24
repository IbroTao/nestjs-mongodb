/* eslint-disable prettier/prettier*/
import { IsOptional } from "class-validator";


export class updateUserDto {
    @IsOptional()
    displayName?: string;

    @IsOptional()
    avatarUrl?: string;
}