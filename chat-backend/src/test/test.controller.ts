import { Controller, Get, Post } from '@nestjs/common';
import { MessageService } from 'src/message/message.service';
import { Profile } from 'src/profile/profile.entity';
import { ProfileService } from 'src/profile/profile.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('test')
export class TestController {
    constructor(private userService: UserService, private profileService: ProfileService, private messageService: MessageService) { }
    @Post("/addTestUsers")
    async addTestUsers() {
        await this.userService.create({
            username: "test1",
            password: "test1",
        } as Partial<User>)
        await this.userService.create({
            username: "test2",
            password: "test2",
        } as Partial<User>)
        await this.userService.create({
            username: "test3",
            password: "test3",
        } as Partial<User>)
    }
    @Post("/addTestProfiles")
    async addTestProfiles() {
        await this.profileService.create({
            firstName: "test1",
            lastName: "test1",
            age: 1,
            email: "test1@gmail.com",
            avatar: "https://templink.com/1",
            isOnline: false,
            lastSeen: new Date(),
            user: await this.userService.findOne(1)
        } as Partial<Profile>)
        await this.profileService.create({
            firstName: "test2",
            lastName: "test2",
            age: 2,
            email: "test2@gmail.com",
            avatar: "https://templink.com/2",
            isOnline: false,
            lastSeen: new Date(),
            user: await this.userService.findOne(2)
        } as Partial<Profile>)
        await this.profileService.create({
            firstName: "test3",
            lastName: "test3",
            age: 3,
            email: "test3@gmail.com",
            avatar: "https://templink.com/3",
            isOnline: false,
            lastSeen: new Date(),

            user: await this.userService.findOne(3),
        } as Partial<Profile>)
    }
    @Post("/addTestMessages")
    async addTestMessages() {
        await this.messageService.create({
            messageContent: "test1",
            sender: await this.profileService.findOne(1),
            receiver: await this.profileService.findOne(2),
            date: new Date(),
            isRead: false
        })
        await this.messageService.create({
            messageContent: "test2",
            sender: await this.profileService.findOne(2),
            receiver: await this.profileService.findOne(1),
            date: new Date(),
            isRead: false
        })
        await this.messageService.create({
            messageContent: "test3",
            sender: await this.profileService.findOne(3),
            receiver: await this.profileService.findOne(1),
            date: new Date(),
            isRead: false
        })
        await this.messageService.create({
            messageContent: "test4",
            sender: await this.profileService.findOne(1),
            receiver: await this.profileService.findOne(3),
            date: new Date(),
            isRead: false
        })
    }
}