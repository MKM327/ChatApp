import { IsInt } from "class-validator";

export class ConversationDto {
    @IsInt()
    senderId: number;
    @IsInt()
    receiverId: number;
}