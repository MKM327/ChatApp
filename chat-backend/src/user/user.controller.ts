
import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Message } from 'src/message/message.entity';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get()
    @UseGuards(AuthGuard)
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Post("/add")
    async addUser(@Body() user: User) {
        this.userService.create(user);
    }

}
