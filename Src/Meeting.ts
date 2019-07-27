import Participant from './Participant';
import Cards from './Cards';
import { ok, err, Result } from 'neverthrow';
export default class Meeting{

    constructor(){
        this.Participants = [];        
        this.Cards = [];
        this.startedMeeting = Date.now();
    }
    public static  MaxTimeToObsolete=35 * 60 * 1000;
    public static MaxTimeToSeeResult = 65 * 60 * 1000;
    startedMeeting: number;
    Id: any;
    Name: string;
    Participants: Array<Participant>;
    EndTime: Date;
    EndVisibleRezsults: Date;
    Cards: Array<Cards>;
    public AddParticipant(p:Participant ): Result<number,Error>{
        if(this.IsObsolete()){
            return err(new Error(`cannot add participant to the obsolete meeting ${this.Id}`));
        }

        this.Participants.push(p);
        return ok(this.Participants.length);
    }
    public AllUnchecked(): Result< boolean, Error>{
        var res=this.TotalNumberOfCardsChecked();
        
        return res.andThen(it=> ok(it===0));
        // const ret= res.match(
        //     (v)=>{return ok(v==0)},
        //     (error)=>{ return error}
        // );
        // return ret;
    }
    public IsCardCheckedByParticipant(c:Cards,p: Participant ): boolean{
        return c.IsCheckedByUser(p);
    }
    public CheckCardByParticipant(c: Cards , p:Participant): Result<Meeting,Error>{
        //TODO: verify participant is added first or add
        //TODO: verify card is added first
        if(this.IsObsolete()){
            return err(new Error(`cannot check card to the obsolete meeting ${this.Id}`));
        }
        c.CheckMe(p);
        return ok(this);
    }
    public TotalNumberOfCardsChecked():Result<number, Error>{
        if(this.CanSeeScore()){
            return ok(this.Cards.filter(it=>it.IsChecked()).length );
        }
        else{
            return err(new Error(`cannot see score for ${this.Id}`));
        }
    }
    public TotalNumberOfCards():number{
        return this.Cards.length;
    }
    
    public IsObsolete(): boolean{
        return (this.PassedTimeFromStart() > Meeting.MaxTimeToObsolete); //35 minutes
    }
    public CanSeeScore(): boolean{
        return (this.PassedTimeFromStart() > Meeting.MaxTimeToSeeResult); //65 minutes
    
    }
    public PassedTimeFromStart():number{
        let dtNow =  Date.now();
        console.log(dtNow);
        return (dtNow - this.startedMeeting );
    }


}