import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
    async create(data: Partial<User>): Promise<User> {
        const hashedPass = await bcrypt.hash(data.password, 10);
        data.password = hashedPass;
        const user = this.userRepository.create(data);
        return this.userRepository.save(user);
    }
    async findAll(): Promise<User[]> {
        return this.userRepository.find({ loadRelationIds: true });
    }
    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id: id } });
    }
    async delete(id: number): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user)
            throw new NotFoundException("User not found");
        await this.userRepository.delete({ id });
        return user;
    }
    async update(id: number, data: Partial<User>): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id: id } });
        if (!user)
            throw new NotFoundException("User not found");
        await this.userRepository.update({ id }, data);
        return this.userRepository.findOne({ where: { id: id } });
    }
}