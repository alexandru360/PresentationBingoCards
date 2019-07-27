import  MeetingsFactory from '../MeetingsFactory';
import Meeting from '../meeting';
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
          return now + 36 * 60* 1000;
        } );
        expect(m1.IsObsolete()).toBe(true);
        //spy.mockClear();        
        spy.mockRestore();
        expect(m1.IsObsolete()).toBe(false);
        
  
      })
  })
  