import { Module } from '@nestjs/common';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileController],
  providers: [ProfileService, TypeOrmModule],
})
export class ProfileModule { }
