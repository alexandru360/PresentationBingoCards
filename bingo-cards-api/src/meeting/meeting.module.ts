import { Module } from '@nestjs/common';
import { MeetingService } from 'bingo-cards-api-objects/src/meeting.service';
import { MeetingsController } from './meetings.controller';

@Module({
  imports: [],
  providers: [MeetingService],
  controllers: [MeetingsController]
})
export class MeetingsModule {}
