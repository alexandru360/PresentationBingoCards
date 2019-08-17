import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meeting } from 'bingo-meeting-objects';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-meeting-running',
  templateUrl: './meeting-running.component.html',
  styleUrls: ['./meeting-running.component.css']
})
export class MeetingRunningComponent implements OnInit {
  private actualMeeting: Meeting = null;
  private id: string;
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
}
