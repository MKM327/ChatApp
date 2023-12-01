import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto\'s/signIn.dto';
import { ProfileService } from 'src/profile/profile.service';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
        private jwtService: JwtService,
        private profileService: ProfileService) { }
    async validateUser(username: string, pass: string): Promise<SignInDto> {
        const user = await this.userRepository.findOne({ where: { username: username } });
        if (!user)
            throw new NotFoundException();
        const isValidated = await bcrypt.compare(pass, user.password);
        if (!isValidated)
            throw new UnauthorizedException();
        const payload = { sub: user.id, username: user.username }
        const profile = await this.profileService.findOne(user.id);
        return {
            accessToken: await this.jwtService.signAsync(payload),
            email: profile.email,
            image: profile.avatar,
            name: profile.firstName,
            userId: user.id
        }

    }
}
