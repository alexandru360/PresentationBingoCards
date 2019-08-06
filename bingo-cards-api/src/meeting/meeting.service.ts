import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Meeting, MeetingsFactory } from 'bingo-meeting-objects';

@Injectable()
export class MeetingService {
    // constructor(
    //     @InjectRepository(Meeting)
    //     private contactRepository: Repository<Meeting>,
    // ) { }
    // async  findAll(): Promise<Meeting[]> {
    //     return await this.contactRepository.find();
    // }

    async  create(userName: string, meetingName: string): Promise<Meeting> {
        return Promise.resolve(new MeetingsFactory().CreateMeeting(userName, meetingName));
    }

    // async update(contact: Contact): Promise<UpdateResult> {

    //     return await this.contactRepository.update(contact.id,contact);
    // }

    // async delete(id): Promise<DeleteResult> {
    //     return await this.contactRepository.delete(id);
    // }
}
