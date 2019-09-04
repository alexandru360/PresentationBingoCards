// import { join } from 'path';
import { Component, OnInit } from '@angular/core';
import { ICreateMeeting } from 'bingo-meeting-objects';
import { ActualMeeting } from 'bingo-cards-api-objects';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { CardsService } from './cards.service';
// import { Subscription } from 'rxjs';
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
  message: any[] = [];
  errMessage: any[] = [];
  participants: any[] = [];
  msgUsr: string;



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
    // console.log(this.meetings);
    this.mName = id;
  }
  show(m) {
    // console.log(m);
    this.meetingShow = m;
    this._show = false;
  }
  addParticipant(idMeeting: string) {
    // console.log(idMeeting);

    if (this._nameParticipant === '') { this.errMessage.push({ statusText: "Username can't be null" }) } else {
      const participant = {
        meetingId: idMeeting,
        nameParticipant: this._nameParticipant
      };

      this.cardsService.addParticipant(participant).subscribe(
        data => {
          if (data) {
          this.message = data.Participants;
            console.log(data.Participants);
          } else { this.message = [] }
        },
        err => { if (err) { this.errMessage.push(err) } else { this.errMessage = [] } }
        // console.log('successfully added the new participant: ' + JSON.stringify(data)),
        // err => console.log('error message :' + JSON.stringify(err))

      );

    }
    // this.message.forEach((element, i) => {
    //   console.log(element);
    // });
    // this.participants.forEach(el) {
    //   console.log(el);
    // }
    // this.participants.forEach(this.iterateInMessage);

  }
  iterateInMessage(item, idx) {
    console.log(item.Participants[item.Participants.length - 1].Name, idx);
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
