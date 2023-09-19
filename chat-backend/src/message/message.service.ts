import { Injectable } from '@nestjs/common';
import { Message } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class MessageService {
    constructor(@InjectRepository(Message) private readonly messageRepository: Repository<Message>) { }

    async getAll(): Promise<Message[]> {
        return this.messageRepository.find();
    }
    async getOne(id: number): Promise<Message> {
        return this.messageRepository.findOne({ where: { id: id } });
    }
    async create(data: Partial<Message>): Promise<Message> {
        const message = this.messageRepository.create(data);
        return this.messageRepository.save(message);
    }
}
