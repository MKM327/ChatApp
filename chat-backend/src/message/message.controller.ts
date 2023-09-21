import { Controller, Get, Post, Put, Delete, Param, Query, Body, ParseIntPipe } from '@nestjs/common';
import { Message } from './message.entity';
import { MessageService } from './message.service';
import { ConversationDto } from './dto/conversation.dto';

@Controller('message')
export class MessageController {
    constructor(private readonly messageService: MessageService) { }
    @Get()
    async get(): Promise<Message[]> {
        return this.messageService.getAll();
    }
    @Get("get/:id")
    async getOne(@Param("id") id: number): Promise<Message> {
        return this.messageService.getOne(id);
    }
    @Post("/add")
    async addMessage(@Body() message: Message) {
        return this.messageService.create(message);
    }
    async updateMessage(@Param("id") id: number, @Body() message: Message) {
        return this.messageService.update(id, message);
    }
    @Delete("/delete/:id")
    async deleteMessage(@Param("id") id: number) {
        return this.messageService.delete(id);
    }
    @Get("/getConversation/")
    async getConversation(@Body() body: ConversationDto, @Query("page", ParseIntPipe) page: number, @Query("limit", ParseIntPipe) limit: number) {
        return this.messageService.getMessagesBySender(body.senderId, body.receiverId, page, limit);
    }
}
