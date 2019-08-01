#!/usr/bin/env node
import MeetingsFactory from "bingo-meeting-objects/MeetingsFactory";
import * as figlet from "figlet";
import * as clear from "clear";
import * as Rx from "rxjs";
import * as pr from "prompt";
import Meeting from "bingo-meeting-objects/Meeting";
import * as inq from "inquirer";
import { json } from "body-parser";
function mesageFromMeeting(m:Meeting):string {
  let perc:number= -1;
  m.Percentage().map(it=>perc=it);
  const ret:string="Please choose a card for meeting " + m.Name + " completed  " +perc +"%";
  return ret;
}
function makePrompt(m:Meeting):any {
  return {
    type: "list",
    name: "card",
    message:mesageFromMeeting(m) ,
    choices: m.Cards.map(it=> { return {name : it.Name + "(checked:"+ it.IsChecked()+")", value : it}; })
  }
}
function DisplayNameMeeting(m:Meeting):string{

  let perc:number= -1;
  m.Percentage().map(it=>perc=it);
return `${m.Name} ${perc}%`;
}
clear();
console.log(figlet.textSync("Bingo Meetings", { horizontalLayout: "full" }));
const promptSubject:Rx.Subject<any> = new Rx.Subject();





const prompt_attributes = [
    {
        name: "meetingName",
        required:true,
        descriptiom:"meeting name"

    },
    {
        name: "username",
    }

];

pr.message= " Please enter ";
pr.start();

pr.get(prompt_attributes, function (err:any, result:any) {
     if (err) {
         console.log(err);
         return 1;
     } else {

        const mf : MeetingsFactory =new MeetingsFactory();
        const m : Meeting = mf.CreateMeeting(result.username,result.meetingName);
        inq.prompt(promptSubject).ui.process.subscribe(({ answer }) => {
          m.CheckCardByParticipant(answer,m.Participants[0]);
          
          clear();
          console.log(figlet.textSync(DisplayNameMeeting(m), { horizontalLayout: "full" }));
          
          let perc:number= -1;
          m.Percentage().map(it=>perc=it);
          if(perc ===100 || perc ===-1){
            promptSubject.complete();
          }
          else{
            promptSubject.next(makePrompt(m));
          }
          
        }, (err) => {
          console.warn(err);
        }, () => {
          console.log("Finished meeting \n");
          console.log(figlet.textSync(DisplayNameMeeting(m), { horizontalLayout: "full" }));
          
        });

        clear();
        console.log(figlet.textSync(DisplayNameMeeting(m), { horizontalLayout: "full" }));
        promptSubject.next(makePrompt(m));

      }});
        


