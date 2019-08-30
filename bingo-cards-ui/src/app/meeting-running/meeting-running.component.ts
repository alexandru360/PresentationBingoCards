import { Cards } from 'bingo-meeting-objects/Cards';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'bingo-meeting-objects';
import { CardsService } from '../cards.service';
import { MatOption } from '@angular/material/core';
// import { from, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-meeting-running',
  templateUrl: './meeting-running.component.html',
  styleUrls: ['./meeting-running.component.css']
})
export class MeetingRunningComponent implements OnInit {
  public actualMeeting: Meeting = null;
  public id: string;
  @Input() selected: boolean;
  @Input() value: any;
  Cards: Array<Cards> = [];
  Id: Cards['Id'];
  arrKeyTxtVal = [];



  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.cardService.GetMeeting(this.id).subscribe(w => {
        this.actualMeeting = new Meeting(w);
        // window.alert(this.actualMeeting.Name);
        // window.alert(this.actualMeeting.Creator());
      });
    });
  }
  // getName(name) {
  //   if (this.selected === true) {
  //     this.Cards.push(name);
  //   }
  //   // console.log(this.Cards.toString());
  // }


  saveCards(i: Array<any>) {
    this.arrKeyTxtVal = [];
    console.log(i);

    for (const el of i) {
      const txtVal = {
        userName: this.actualMeeting.Cards[el].Name,
        cardId: this.actualMeeting.Cards[el].Id
      };
      this.arrKeyTxtVal.push(txtVal);
    }
    console.log(this.arrKeyTxtVal);
    for (const card of this.arrKeyTxtVal) {
      this.cardService.SaveCards(this.id, card).subscribe(data => console.log(data));
    }
  }




  selectionChange(option: MatOption) {
    if (option.selected === true) {
      // console.log('a fost selectat: ' + option.value);
      this.Id = option.value;
      this.Cards.push(option.value);
    } else {
      this.Cards.splice(this.Cards.indexOf(option.value), 1);
      // console.log('a fost deselectat: ' + option.value);
    }

  }
}
