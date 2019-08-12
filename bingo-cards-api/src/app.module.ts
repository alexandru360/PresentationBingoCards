import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingsModule } from './meeting/meeting.module';

@Module({
  
  imports: [MeetingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
