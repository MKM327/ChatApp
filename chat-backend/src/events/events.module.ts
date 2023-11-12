import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileModule } from 'src/profile/profile.module';
import { MessageModule } from 'src/message/message.module';
import { PostgresAdapterService } from './posgresAdapter.service';
import { EventsController } from './events.controller';

@Module(
    {
        providers: [EventsGateway, PostgresAdapterService],
        imports: [ProfileModule, MessageModule],
        controllers: [EventsController]
    })
export class EventsModule {

}
