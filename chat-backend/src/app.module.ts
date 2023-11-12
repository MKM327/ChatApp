import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';
import { Message } from './message/message.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/profile.entity';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { EventsGateway } from './events/events.gateway';
import { EventsModule } from './events/events.module';
import { LEGAL_TCP_SOCKET_OPTIONS } from 'typeorm';
@Module({
  imports: [

    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'localhost',
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [User, Message, Profile],
        synchronize: true,
      }),
    UserModule,
    MessageModule,
    ProfileModule,
    AuthModule,
    TestModule,
    EventsModule
  ],
  controllers: [],
  providers: [EventsGateway],
})
export class AppModule { }
