import Participant from './Participant';
import Cards from './Cards';
export default class Meeting{
    constructor(){
        this.Participants = [];        
        this.Cards = [];
    }

    Id: any;
    Name: string;
    Participants: Array<Participant>;
    EndTime: Date;
    EndVisibleRezsults: Date;
    Cards: Array<Cards>;

    public AllUnchecked(): boolean{
        return (this.Cards.filter(it=>it.IsChecked()).length === 0);
    }



}