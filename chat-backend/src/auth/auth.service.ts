import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private jwtService: JwtService) { }
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { username: username } });
        if (!user)
            throw new NotFoundException();
        const isValidated = await bcrypt.compare(pass, user.password);
        if (!isValidated)
            throw new UnauthorizedException();
        const payload = { sub: user.id, username: user.username }
        return {
            access_token: await this.jwtService.signAsync(payload),
        }

    }
}
