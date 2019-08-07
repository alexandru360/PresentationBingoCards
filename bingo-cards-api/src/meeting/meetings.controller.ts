import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting, Participant } from 'bingo-meeting-objects';
import {CreateMeeting } from './CreateMeeting';
import { ActualMeeting } from './ActualMeeting';
import { CheckCardParticipant } from './CheckCardParticipant';

@Controller('meetings')
export class MeetingsController {
    constructor(private meetingsService: MeetingService){}

    @Get()
    index(): ActualMeeting [] {
      return this.meetingsService.ActualMeetings();
    }
    @Get(':id')
    getMeeting(@Param('id') id: any): Meeting {
      return this.meetingsService.findMeeting(id);
    }

    @Post()
    async create(@Body() cm: CreateMeeting): Promise<Meeting> {
        // console.log(`userName : ${JSON.stringify(cm.userName)}  meetingName: ${JSON.stringify(cm.meetingName)}`);
        return this.meetingsService.create(cm.userName, cm.meetingName);
    }
    @Put(':id/addParticipant')
    async addParticipant(@Param('id') id: any, @Body() nameParticipant: string): Promise<Meeting> {
        // console.log(`userName : ${JSON.stringify(cm.userName)}  meetingName: ${JSON.stringify(cm.meetingName)}`);
        return this.meetingsService.AddParticipant(id, nameParticipant);
    }
    @Put(':id/checkCard')
    async checkCard(@Param('id') id: any, @Body() CP: CheckCardParticipant): Promise<Meeting> {
        // console.log(`userName : ${JSON.stringify(cm.userName)}  meetingName: ${JSON.stringify(cm.meetingName)}`);
        return this.meetingsService.checkCard(id, CP.cardId, CP.userName);
    }

    // @Put(':id/update')
    // async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
    //     contactData.id = Number(id);
    //     console.log('Update #' + contactData.id)
    //     return this.contactsService.update(contactData);
    // }

    // @Delete(':id/delete')
    // async delete(@Param('id') id): Promise<any> {
    //   return this.contactsService.delete(id);
    // }

}
