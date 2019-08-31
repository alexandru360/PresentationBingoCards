import { Component, OnInit } from '@angular/core';
import { ICreateMeeting } from 'bingo-meeting-objects';
import { ActualMeeting } from 'bingo-cards-api-objects';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { CardsService } from './cards.service';
// import { Meeting } from 'bingo-meeting-objects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'Bingo Meetings';
  meetings: ActualMeeting[] = [];
  createMeetingForm: FormGroup;
  ngForm: FormGroupDirective;
  mName: string = '';

  constructor(private formBuilder: FormBuilder, private cardsService: CardsService) {
    this.meetings = [];

    // why this gives an compilation error if we put new CreateMeeting ? references?
    const c: ICreateMeeting = { userName: '', meetingName: '' };
    this.createMeetingForm = this.formBuilder.group(c, Validators.required);
  }
  getMeetingValue(id) {
    console.log(this.meetings);
    this.mName = id;
  }

  ngOnInit(): void {
    this.refreshMeetings();
  }
  refreshMeetings(): void {
    this.cardsService.GetMeetings().subscribe(it => this.meetings = it);
  }
  onSubmit(data: ICreateMeeting, formDirective: FormGroupDirective) {

    this.createMeetingForm.disable();

    this.cardsService.SaveMeeting(data).subscribe(it => {
      formDirective.resetForm();
      this.createMeetingForm.enable();
      this.createMeetingForm.reset();
      this.refreshMeetings();
    });

  }

}
