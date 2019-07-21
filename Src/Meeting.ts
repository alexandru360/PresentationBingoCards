import Participant from './Participant';
export default class Meeting{
    constructor(){
        this.Participants = [];        
    }

    Id: any;
    Name: string;
    Participants: Array<Participant>;
    EndTime: Date;
    EndVisibleRezsults: Date;
}