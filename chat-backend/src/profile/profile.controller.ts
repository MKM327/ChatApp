import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Get, Post, Put, Delete, Param, Body, HttpException, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';
import { Message } from 'src/message/message.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { OnlineDto } from './dto/online.dto';
@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) { }
    @Get()
    async getAll(): Promise<Profile[]> {
        return this.profileService.getAll();
    }
    @Get("get/:id")
    @UseGuards(AuthGuard)
    async getOne(@Param("id", ParseIntPipe) id: number): Promise<Profile> {
        return this.profileService.getOne(id);
    }
    @Get("get/:id/sentMessages")
    @UseGuards(AuthGuard)
    async getSentMessages(@Param("id", ParseIntPipe) id: number): Promise<Message[]> {
        return this.profileService.getSentMessages(id);
    }
    @Get("get/:id/receivedMessages")
    async getReceivedMessages(@Param("id", ParseIntPipe) id: number): Promise<Message[]> {
        return this.profileService.getReceivedMessages(id);
    }
    @Post("/add")
    async addProfile(@Body() profile: Profile) {
        this.profileService.create(profile);
    }
    @Put("/update/:id")
    async updateProfile(@Param("id", ParseIntPipe) id: number, @Body() profile: Profile) {
        return this.profileService.update(id, profile);
    }
    @Delete("/delete/:id")
    async deleteProfile(@Param("id", ParseIntPipe) id: number) {
        return this.profileService.delete(id);
    }
    @Get("/online/:id")
    async getOnline(@Param("id", ParseIntPipe) id: number): Promise<OnlineDto[]> {
        return this.profileService.getOnline(id);
    }
}
