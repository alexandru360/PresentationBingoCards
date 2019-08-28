import {Participant} from "./Participant";

export class Cards {
    constructor() {
        this.checkedByUser= [];
    }
    Id: number;
    Name: string;
    Description: string;
    checkedByUser: Array<Participant>;

    public CheckMe( p:Participant ):number {
        // todo: maybe verify is not double push
        this.checkedByUser.push(p);
        return this.checkedByUser.length;
    }
    public IsChecked(): boolean {

        return this.checkedByUser.length > 0;
    }
    public IsCheckedByUser(p:Participant): boolean {

        return this.checkedByUser.filter(it=>it.Id === p.Id).length > 0;
    }
     public static DefaultCards(): Array<Cards>   {

        let i:number = 1;
        const ret: Array<Cards> = [];
        let addCard:(name:string)=>number = (name:string)=> {
            let c:Cards=new Cards();
            c.Name=name;
            c.Id = i++;
            ret.push(c);
            return ret.length;

        };

        addCard("Who just joined?");
        addCard("Can you email that to everyone ?");
        addCard("..., are you there ?");
        addCard("Can you hear me?");
        addCard("I'm sorry, I was on mute");
        addCard("I'm sorry, connection issues");
        addCard("Hello ? Hello ?");
        addCard("Can we take this offline ?");
        addCard("Can everyone see my screen ?");
        addCard("No, still loading");
        addCard("Sorry, I have to go to another call");

        // let c=new Cards();
        // c.Name="Who just joined?";
        // c.Id = i++;
        // ret.push(c);

        // c=new Cards();
        // c.Name="Can you email that to everyone ?";
        // c.Id = i++;
        // ret.push(c);




        return ret.sort((a,b)=> a.Name.localeCompare(b.Name));
    }


}