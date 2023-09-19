import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { Message } from './message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './message.service';
@Module({
  controllers: [MessageController],
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessageService]
})
export class MessageModule { }
