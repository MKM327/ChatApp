import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Message } from './message.entity';
import { MessageService } from './message.service';

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
}
