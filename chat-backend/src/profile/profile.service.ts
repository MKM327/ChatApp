import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from 'src/message/message.entity';
import { OnlineDto } from './dto/online.dto';
@Injectable()
export class ProfileService {
    constructor(@InjectRepository(Profile) private readonly profileRepository: Repository<Profile>) { }
    async create(data: Partial<Profile>): Promise<Profile> {
        const user = this.profileRepository.create(data);
        return this.profileRepository.save(user);


    }
    async getAll(): Promise<Profile[]> {
        return this.profileRepository.find({ loadRelationIds: true });
    }
    async getOne(id: number): Promise<Profile> {
        return this.profileRepository.findOne({ where: { id: id }, relations: ["sentMessages", "receivedMessages", "user"] });
    }
    async getSentMessages(id: number): Promise<Message[]> {
        const profile = await this.profileRepository.findOne({
            where: { id: id },
            relations: ["sentMessages"]
        });
        if (!profile)
            throw new NotFoundException("Profile not found");
        return profile.sentMessages;
    }
    async getReceivedMessages(id: number): Promise<Message[]> {
        const profile = await this.profileRepository.findOne({
            where: { id: id },
            relations: ["receivedMessages"]
        });
        if (!profile)
            throw new NotFoundException("Profile not found");
        return profile.receivedMessages;
    }
    async update(id: number, data: Partial<Profile>): Promise<Profile> {
        const profile = await this.profileRepository.findOne({ where: { id: id } });
        if (!profile)
            throw new NotFoundException("Profile not found");
        await this.profileRepository.update({ id }, data);
        return this.profileRepository.findOne({ where: { id: id } });
    }
    async delete(id: number): Promise<Profile> {
        const profile = await this.profileRepository.findOne({ where: { id: id } });
        if (!profile)
            throw new NotFoundException("Profile not found");
        await this.profileRepository.delete({ id });
        return profile;
    }
    async findOne(id: number): Promise<Profile> {
        return this.profileRepository.findOne({ where: { id: id } });
    }
    async handleConnection(id: number): Promise<void> {
        const profile = await this.profileRepository.findOne({ where: { id: id } });
        if (!profile)
            throw new NotFoundException("Profile not found");
        profile.isOnline = true;
        await this.profileRepository.save(profile);
    }
    async handleDisconnection(id: number): Promise<void> {
        const profile = await this.profileRepository.findOne({ where: { id: id } });
        if (!profile)
            throw new NotFoundException("Profile not found");
        profile.isOnline = false;
        await this.profileRepository.save(profile);
    }

    async getOnline(): Promise<OnlineDto[]> {
        const online = await this.profileRepository.find({ where: { isOnline: true }, select: ["id", "firstName"] });
        return online;
    }
}
