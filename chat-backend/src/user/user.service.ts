import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { EntityNotFoundError, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/message/message.entity';
@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
    async create(data: Partial<User>): Promise<User> {
        const user = this.userRepository.create(data);
        return this.userRepository.save(user);
    }
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    async getSentMessages(userId: number): Promise<Message[]> {
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
            relations: ["sentMessages", "sentMessages.receiver"]
        });
        if (!user)
            throw new NotFoundException("id is not found");
        return user.sentMessages;
    }
}