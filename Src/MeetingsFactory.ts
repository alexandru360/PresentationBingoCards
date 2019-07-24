import Meeting from './Meeting';
import Participant from './Participant';
import Guid from './Guid';
import Cards from './Cards';

export default class MeetingsFactory{
    public CreateMeeting(userName:string, meetingName: string): Meeting{        
        let p = new Participant();
        p.Id = Guid.newGuid();
        p.Name = userName;

        let m = new Meeting();
        m.Id = Guid.newGuid();
        m.Cards=  this.DefaultCards();
        m.Name = meetingName;
        m.AddParticipant(p);
        
        return m;
    }

      DefaultCards(): Array<Cards>   {

        let i=1;
        const ret=[];
        
        let c=new Cards();
        c.Name="Who just joined?";
        c.Id = i++;
        ret.push(c);

        c=new Cards();
        c.Name="Can you email that to everyone ?";
        c.Id = i++;
        ret.push(c);

        return ret;
    }
}