import { IsEmpty, IsInt } from "class-validator";

import { ValidationOptions } from 'class-validator';
import { Profile } from "src/profile/profile.entity";
import { Message } from "../message.entity";
export class ChattedProfileDto {
    @IsInt()
    id: number;
    firstName: string;
    isOnline: boolean;
    avatar: string;
    lastMessage: string;
    MessageDate: Date;

}