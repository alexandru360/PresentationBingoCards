import { Cards } from 'bingo-meeting-objects/Cards';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'bingo-meeting-objects';
import { CardsService } from '../cards.service';
import { MatOption } from '@angular/material/core';

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
  constructor(
    private route: ActivatedRoute,
    private cardService: CardsService
  ) {}
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
  selectionChange(option: MatOption) {
    // console.log(option.selected);
    // console.log(option.value);
    if (option.value && option.selected) {
      this.Id = option.value;
      this.Cards.push(option.value);
      let i;
      for (i = 0; i < this.Cards.length; i++) {
        console.log(this.Cards[i]);
      }
    }

  }
}
