import  MeetingsFactory from '../MeetingsFactory';
import Meeting from '../meeting';
import Participant from '../Participant';
import { ok, err, Result } from 'neverthrow';

describe('Meeting Obsolete', () => {
    it('meeting should not be obsolete after creation', () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        expect(m1.IsObsolete()).toBe(false);
        
        
  
      })
      it('meeting should  be obsolete after 35 minutes', () => {
        const mf=new MeetingsFactory();

        const m1=mf.CreateMeeting("andrei","first meeting");
        const now = Date.now();
        const spy = jest.spyOn(Date,'now');
        spy.mockImplementation(()=>{
          console.log('calling DateTime Now');
          return now + Meeting.MaxTimeToObsolete + 1000;
        } );
        expect(m1.IsObsolete()).toBe(true);
        //spy.mockClear();        
        spy.mockRestore();
        expect(m1.IsObsolete()).toBe(false);
        
  
      })
      it('meeting obsolete cannot do actions', () => {
        const mf=new MeetingsFactory();

        const m1=mf.CreateMeeting("andrei","first meeting");
        const now = Date.now();
        const spy = jest.spyOn(Date,'now');
        spy.mockImplementation(()=>{
          console.log('calling DateTime Now');
          return now + Meeting.MaxTimeToObsolete + 1000;
        } );
        expect(m1.IsObsolete()).toBe(true);
        const p=new Participant();
        p.Id=70;
        p.Name ="alexandru";
        const res= m1.AddParticipant(p);
        expect(res.isOk()).toBe(false);
        spy.mockRestore();
          
      })
  })
  