import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from 'src/message/message.entity';
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

}
