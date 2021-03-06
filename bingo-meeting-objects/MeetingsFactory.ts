import {Meeting} from './Meeting';
import {Participant} from './Participant';
import {Guid} from './Guid';
import {Cards} from './Cards';

export class MeetingsFactory{
    public CreateMeeting(userName:string, meetingName: string): Meeting{        
        let p = new Participant();
        p.Id = Guid.newGuid();
        p.Name = userName;

        let m = new Meeting();
        m.Id = Guid.newGuid();
        m.Cards=  Cards.DefaultCards();
        m.Name = meetingName;
        m.AddParticipant(p);
        
        return m;
    }


}