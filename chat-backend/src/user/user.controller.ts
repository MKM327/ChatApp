
import { Controller, Get, Post, Put, Delete, Param, Body, HttpException } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Message } from 'src/message/message.entity';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post("/add")
    async addUser(@Body() user: User) {
        this.userService.create(user);
    }
    @Get("getSentMessages/:id")
    async getUserMessages(@Param("id") id: number): Promise<Message[]> {
        return this.userService.getSentMessages(id);
    }
}
