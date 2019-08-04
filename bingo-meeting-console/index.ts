#!/usr/bin/env node
import {MeetingsFactory} from "bingo-meeting-objects/MeetingsFactory";
import * as figlet from "figlet";
import * as clear from "clear";
import * as Rx from "rxjs";
import * as pr from "prompt";
import {Meeting} from "bingo-meeting-objects/Meeting";
import * as inq from "inquirer";
import fn from "username";
const username = require("username");
const chalk = require("chalk");
const cTable = require("console.table");

function mesageFromMeeting(m: Meeting): string {
  let perc: number = -1;
  m.Percentage().map(it => (perc = it));
  const ret: string =
    "Please choose a card for meeting " + m.Name + " completed  " + perc + "%";
  return ret;
}
function makePrompt(m: Meeting): any {
  return {
    type: "list",
    name: "card",
    message: mesageFromMeeting(m),
    pageSize: m.Cards.length +2,
    choices: m.Cards.map(it => {
      return { name: 
        it.Name + "(checked:" + it.IsChecked() + ")", value: it };
    }).concat([new inq.Separator(), {name:`End Bingo Meeting ${m.Name}`,value:null}])
  };
}
function DisplayNameMeeting(m: Meeting): string {
  let perc: number = -1;
  m.Percentage().map(it => (perc = it));
  return `${m.Name} ${perc}%`;
}

async function main() {
  clear();
  const userName :string = await username();

  console.log(figlet.textSync("Bingo Meetings", { horizontalLayout: "full" }));
  const promptSubject: Rx.Subject<any> = new Rx.Subject();

  const prompt_attributes = [
    {
      name: "meetingName",
      required: true,
      description: chalk.white.bgBlue.bold("meeting name")
    },
    {
      name: "username",
      default: userName
    }
  ];
  let perc: number = -1;

  pr.message = " Please enter ";
  pr.start();

  pr.get(prompt_attributes, function(err: any, result: any) {
    if (err) {
      console.log(err);
      return 1;
    } else {
      const mf: MeetingsFactory = new MeetingsFactory();
      const m: Meeting = mf.CreateMeeting(result.username, result.meetingName);
      inq.prompt(promptSubject).ui.process.subscribe(
        ({ answer }) => {
          if(answer == null){
            promptSubject.complete();
            return;
          }
          m.CheckCardByParticipant(answer, m.Participants[0]);

          clear();
          console.log(
            figlet.textSync(DisplayNameMeeting(m), { horizontalLayout: "full" })
          );

          m.Percentage().map(it => (perc = it));
          if (perc === 100 || perc === -1) {
            promptSubject.complete();
          } else {
            promptSubject.next(makePrompt(m));
          }
        },
        err => {
          console.warn(err);
        },
        () => {
          clear();
          console.log(`Finished meeting ${m.Name} for ${userName} `);
          console.table(
            m.Cards
            .sort((a,b)=>{
              if(a.IsChecked() && b.IsChecked()) {
                return a.Name.localeCompare(b.Name);
              }
              
              if(!(a.IsChecked()) && (!b.IsChecked())) {
                return a.Name.localeCompare(b.Name);
              }
              if(a.IsChecked()) {
                return -1;
              }

              return 1;

            })

            .map(it=> { return  { Card: it.Name, Checked: it.IsChecked() ? chalk.white.bgBlue.bold(true): false};})
          );
          console.log(chalk.white.bgBlue.bold(`Percentage ${perc}%`)) ;
          
        }
      );

      clear();
      console.log(
        figlet.textSync(DisplayNameMeeting(m), { horizontalLayout: "full" })
      );
      promptSubject.next(makePrompt(m));
    }
  });
}
(async () => {
  try {
      await main();
      
  } catch (e) {
      console.log(JSON.stringify(e));
  }
})();