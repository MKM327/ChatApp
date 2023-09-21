import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { Message } from './message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './message.service';
import { ProfileModule } from 'src/profile/profile.module';
@Module({
  controllers: [MessageController],
  imports: [TypeOrmModule.forFeature([Message]), ProfileModule],
  providers: [MessageService],
  exports: [MessageService]
})
export class MessageModule { }
