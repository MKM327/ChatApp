import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { ProfileService } from 'src/profile/profile.service';
import { ProfileModule } from 'src/profile/profile.module';

@Module(
    {
        providers: [EventsGateway],
        imports: [ProfileModule]
    })
export class EventsModule {

}
