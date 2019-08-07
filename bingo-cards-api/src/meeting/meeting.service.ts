import { Injectable } from '@nestjs/common';
import { Meeting, MeetingsFactory, Participant } from 'bingo-meeting-objects';
import { ActualMeeting } from './ActualMeeting';

@Injectable()
export class MeetingService {
    // constructor(
    //     @InjectRepository(Meeting)
    //     private contactRepository: Repository<Meeting>,
    // ) { }
    // async  findAll(): Promise<Meeting[]> {
    //     return await this.contactRepository.find();
    // }
    constructor(){
        this.meetings = [];
    }
    public ActualMeetings(): ActualMeeting []{

            return this.meetings
            .filter(it => !it.IsObsolete())
            .map(it => {  return {
                    idMeeting: it.Id,
                    participantName: it.Participants[0].Name} as ActualMeeting; });
    }

    public AddParticipant(idMeeting: any, nameParticipant: string){
        const m = this.meetings.find(it => it.Id === idMeeting );
        // TODO: throw if meeting is null
        const p = new Participant();
        p.Id = m.Participants.length + 1;
        p.Name = nameParticipant;
        m.AddParticipant(p);
        return m;

    }
    
    private meetings: Array<Meeting> ;

    async  create(userName: string, meetingName: string): Promise<Meeting> {
        const m = new MeetingsFactory().CreateMeeting(userName, meetingName);
        this.meetings.push(m);
        return Promise.resolve(m);
    }

    // async update(contact: Contact): Promise<UpdateResult> {

    //     return await this.contactRepository.update(contact.id,contact);
    // }

    // async delete(id): Promise<DeleteResult> {
    //     return await this.contactRepository.delete(id);
    // }
}
