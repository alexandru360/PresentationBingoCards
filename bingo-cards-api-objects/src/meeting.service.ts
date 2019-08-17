import { Injectable } from '@nestjs/common';
import { Meeting, MeetingsFactory, Participant } from 'bingo-meeting-objects';
import { ActualMeeting } from './ActualMeeting';

@Injectable()
export class MeetingService {
    findMeeting(id: any): Meeting {
        return this.meetings.find(it => it.Id === id);
    }
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

        // TODO: create in meeting a Organizer property and return Participants[0]
            return this.meetings
            .filter(it => !it.IsObsolete())
            .map(it => {  return {
                    idMeeting: it.Id,
                    meetingName: it.Name,
                    participantName: it.Participants[0].Name} as ActualMeeting; });
    }

    public AddParticipant(idMeeting: any, nameParticipant: string): Meeting{
        const m = this.meetings.find(it => it.Id === idMeeting );
        // TODO: throw if meeting is null
        const p = new Participant();
        p.Id = m.Participants.length + 1;
        p.Name = nameParticipant;
        m.AddParticipant(p);
        return m;

    }
    public checkCard(idMeeting: any, idCard: number, nameParticipant: string ): Meeting{
        const m = this.meetings.find(it => it.Id === idMeeting );
        // TODO: throw if meeting is null
        const c = m.FindCard(idCard);
        // TODO: throw if card is null
        const p = m.FindParticipantAfterName(nameParticipant);
        // TODO: throw if participant is null

        m.CheckCardByParticipant(c, p);
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
