import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting } from 'bingo-meeting-objects';
import {CreateMeeting }from './CreateMeeting';

@Controller('meetings')
export class MeetingsController {
    constructor(private meetingsService: MeetingService){}

    @Get()
    index(): Meeting[] {
      return this.meetingsService.meetings;
    }

    @Post()
    async create(@Body() cm: CreateMeeting): Promise<Meeting> {
        console.log(`userName : ${JSON.stringify(cm.userName)}  meetingName: ${JSON.stringify(cm.meetingName)}`);
        return this.meetingsService.create(cm.userName, cm.meetingName);
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
