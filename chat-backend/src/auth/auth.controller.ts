import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    async validateUser(@Body() data: LoginDto): Promise<Boolean> {
    return this.authService.validateUser(data.username, data.password);
    }
}