
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
    @Post("/addTestUsers")
    async addTestUsers() {
        this.userService.create({
            username: "test1",
            password: "test1",
        } as Partial<User>)
        this.userService.create({
            username: "test2",
            password: "test2",
        } as Partial<User>)
        this.userService.create({
            username: "test3",
            password: "test3",
        } as Partial<User>)
    }
}
