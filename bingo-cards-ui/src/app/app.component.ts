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
  meetingId: any;
  nameParticipant: string;
  _show: boolean = true;
  meetingShow: any;


  constructor(private formBuilder: FormBuilder, private cardsService: CardsService) {
    this.meetings = [];

    // why this gives an compilation error if we put new CreateMeeting ? references?
    const c: ICreateMeeting = { userName: '', meetingName: '' };
    this.createMeetingForm = this.formBuilder.group(c, Validators.required);
  }
  // _nameParticipant = this.createMeetingForm.get('userName').value;
  get _nameParticipant(): any {
    return this.createMeetingForm.get('userName').value;
  }
  getMeetingValue(id) {
    console.log(this.meetings);
    this.mName = id;
  }
  show(m) {
    console.log(m);
    this.meetingShow = m;
    this._show = false;
  }
  addParticipant(idMeeting: string) {
    console.log(idMeeting);
    const participant = {
      meetingId: idMeeting,
      nameParticipant: this._nameParticipant
    };

    this.cardsService.addParticipant(participant).subscribe(data => console.log(data));
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
