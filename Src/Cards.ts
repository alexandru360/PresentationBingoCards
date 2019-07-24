import Participant from "./Participant";

export default class Cards{
    constructor(){
        this.checkedByUser= [];
    }
    Id: Number;
    Name: string;
    Description: string;
    checkedByUser: Array<Participant>;

    public CheckMe( p:Participant ):number {
        //TODO: maybe verify is not double push
        this.checkedByUser.push(p);
        return this.checkedByUser.length;
    }
    public IsChecked(): boolean{
        
        return this.checkedByUser.length > 0;
    }
    public IsCheckedByUser(p:Participant): boolean{
        
        return this.checkedByUser.filter(it=>it.Id === p.Id).length > 0;
    }

    
}