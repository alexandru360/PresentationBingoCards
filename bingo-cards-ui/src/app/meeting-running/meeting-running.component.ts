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
  public actualMeeting:Meeting;
  public id: string;
  @Input() selected: boolean;
  @Input() value: any;
  Cards: Array<number> = [];
  Id: Cards['Id'];
  arrKeyTxtVal = [];
  userName: string = '';
  cardId: string = '';


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


  saveCards(cards: Array<number>) {
    this.arrKeyTxtVal = [];
    // console.log(cards);

    for (const el of cards) {
      const txtVal = {
        userName: this.actualMeeting.Cards[el].Name,
        cardId: this.actualMeeting.Cards[el].Id
    };
      this.arrKeyTxtVal.push(txtVal);
    }
    // console.log(this.arrKeyTxtVal);
    for (const card of this.arrKeyTxtVal) {
      this.cardService.checkCard(this.id, card).subscribe(
        // data => console.log('success message: ' + data),
        // err => console.log('HTTP Error: ' + err)
        ); }

  }




  selectionChange(option: MatOption) {
    if (option.selected === true) {
      // console.log('it was selected: ' + option.value);
      this.Id = option.value;
      this.Cards.push(option.value);
    } else {
      this.Cards.splice(this.Cards.indexOf(option.value), 1);
      // console.log('it was selected: ' + option.value);
    }

  }
}
