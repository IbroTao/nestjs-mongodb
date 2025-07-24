export declare class CreateUserSettingsDto {
    receiveSMS?: boolean;
    receiveNotifications?: boolean;
    receiveEmails?: boolean;
}
export declare class CreateUserDto {
    username: string;
    displayName?: string;
    settings?: CreateUserSettingsDto;
}
