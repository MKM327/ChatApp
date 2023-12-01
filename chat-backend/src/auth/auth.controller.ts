import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { SignInDto } from './dto\'s/signIn.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    async validateUser(@Body() data: LoginDto): Promise<SignInDto> {
        return this.authService.validateUser(data.username, data.password);
    }
}