class Meeting{
    constructor(){
        this.Participants = [];        
    }

    Id: any;
    Name: string;
    Participants: Array<Participant>;
    EndTime: Date;
    EndVisibleRezsults: Date;
}