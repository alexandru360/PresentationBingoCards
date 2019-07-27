import  MeetingsFactory from '../MeetingsFactory';
import Meeting from '../meeting';
describe('Check  card basic', () => {
    it('card should be checked', () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        console.log(m1.Cards.length);
        
        expect(m1.AllUnchecked()).toBe(true);
        m1.CheckCardByParticipant(m1.Cards[0], m1.Participants[0]);    
        expect(m1.AllUnchecked()).toBe(false);
        expect(m1.IsCardCheckedByParticipant(m1.Cards[0], m1.Participants[0])).toBe(true);
        
        
  
      })
      it('number of cards checked', () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        console.log(m1.Cards.length);
        
        expect(m1.TotalNumberOfCardsChecked()).toBe(0);
        m1.CheckCardByParticipant(m1.Cards[0], m1.Participants[0]);    
        expect(m1.TotalNumberOfCardsChecked()).toBe(1);
        
        
  
      })
  })
  