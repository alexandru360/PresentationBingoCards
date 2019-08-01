import  MeetingsFactory from "bingo-meeting-objects/MeetingsFactory";
import Meeting from "bingo-meeting-objects/Meeting";
describe("Check  card basic", () => {
    it("card should be checked", () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        //console.log(m1.Cards.length);
        let res=m1.AllUnchecked();
        expect(res.isOk()).toBe(true);
        let result= false;
        res.map(t=> result =t);
        expect(result).toBe(true);
        let res1 = m1.CheckCardByParticipant(m1.Cards[0], m1.Participants[0]);
        expect(res1.isOk()).toBe(true);
        res=m1.AllUnchecked();
        expect(res.isOk()).toBe(true);
        result= false;
        res.map(t=> result =t);
        expect(result).toBe(false);            
        expect(m1.IsCardCheckedByParticipant(m1.Cards[0], m1.Participants[0]).isOk()).toBe(true);
        
        
  
      })
      it("number of cards checked", () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        //console.log(m1.Cards.length);
        let res=m1.TotalNumberOfCardsChecked();
        expect(res.isOk()).toBe(true);
        let result= -1;
        res.map(t=> result =t);
        
        expect(result).toBe(0);
        const res1= m1.CheckCardByParticipant(m1.Cards[0], m1.Participants[0]);    
        expect(res1.isOk()).toBe(true);
        res=m1.TotalNumberOfCardsChecked();
        expect(res.isOk()).toBe(true);
        result= -1;
        res.map(t=> result =t);
        
        expect(result).toBe(1);
        
        
  
      })
  })
  