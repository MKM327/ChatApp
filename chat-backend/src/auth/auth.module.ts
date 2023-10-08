import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forFeature([User]),
  ConfigModule.forRoot(),
  JwtModule.register(
    {
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '10m' }
    })],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AuthModule { }
