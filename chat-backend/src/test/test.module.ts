import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { UserModule } from 'src/user/user.module';
import { MessageModule } from 'src/message/message.module';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  controllers: [TestController],
  imports: [UserModule, MessageModule, ProfileModule]
})
export class TestModule { }
