import  MeetingsFactory from '../MeetingsFactory';
import Meeting from '../meeting';
describe('Meetings creation', () => {
    it('a meeting should have been created properly', () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        
        expect(m1.Name).toBe("first meeting");
        expect(m1.Participants.length).toBe(1);
        expect(m1.Participants[0].Name).toBe("andrei");
        expect(m1.AllUnchecked()).toBe(true);
        
        
  
      })
    it('two meeting have different ids', () => {
      const mf=new MeetingsFactory();
      const m1=mf.CreateMeeting("andrei","first meeting");
      const m2=mf.CreateMeeting("andrei","first meeting");
      
      expect(m1.Id).not.toBe(m2.Id);
      

    })
  })