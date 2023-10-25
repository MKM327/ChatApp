import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileService } from 'src/profile/profile.service';
import { Profile } from 'src/profile/profile.entity';
import { ChattedProfileDto } from './dto/ChattedProfileDto'
@Injectable()
export class MessageService {
    constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>,
        private profileService: ProfileService) { }

    async getAll(): Promise<Message[]> {
        return this.messageRepository.find({ relations: ["sender", "receiver"] });
    }
    async getOne(id: number): Promise<Message> {
        const message = this.messageRepository.findOne({ where: { id: id }, relations: ["sender", "receiver"] });;
        if (!message)
            throw new NotFoundException();
        return message;
    }
    async create(data: Partial<Message>): Promise<Message> {
        const message = this.messageRepository.create(data);
        return this.messageRepository.save(message);
    }
    async update(id: number, data: Partial<Message>): Promise<Message> {
        const message = await this.messageRepository.findOne({ where: { id: id } });
        if (!message)
            throw new NotFoundException();
        this.messageRepository.merge(message, data);
        return this.messageRepository.save(message);
    }
    async delete(id: number): Promise<Message> {
        const message = await this.messageRepository.findOne({ where: { id: id } });
        if (!message)
            throw new NotFoundException();
        return this.messageRepository.remove(message);
    }
    async getMessagesBySender(senderId: number, receiverId: number, page: number, limit: number): Promise<Message[]> {
        {
            const sender = await this.profileService.getOne(senderId);
            const receiver = await this.profileService.getOne(receiverId);
            const messages = await this.messageRepository.find({
                where: [
                    { sender: sender, receiver: receiver },
                    { sender: receiver, receiver: sender }
                ],
                relations: ["sender", "receiver"],
                skip: (page - 1) * limit,
                take: limit,
                order: {
                    date: "DESC"
                }
            });
            return messages;
        }
    }
    async getChattedProfiles(id: number): Promise<ChattedProfileDto[]> {
        const profile = await this.profileService.getOne(id);
        const profileMessages = await this.messageRepository.find(
            { where: [{ sender: profile }, { receiver: profile }], relations: { receiver: true, sender: true } });
        const chattedProfiles: ChattedProfileDto[] = [];

        debugger;
        for (let message of profileMessages) {
            const user = chattedProfiles.find(a => a.id === message.receiver.id || a.id === message.sender.id);
            if (user)
                continue;
            if (message.receiver.id !== id)
                chattedProfiles.push(
                    {
                        id: message.receiver.id,
                        avatar: message.receiver.avatar,
                        firstName: message.receiver.firstName,
                        isOnline: message.receiver.isOnline,
                        lastMessage: message.messageContent,
                        MessageDate: message.date,
                    });
            else {
                chattedProfiles.push({
                    id: message.sender.id,
                    avatar: message.sender.avatar,
                    firstName: message.sender.firstName,
                    isOnline: message.sender.isOnline,
                    lastMessage: message.messageContent,
                    MessageDate: message.date,
                })
            }

        }
        return chattedProfiles;
    }

}
