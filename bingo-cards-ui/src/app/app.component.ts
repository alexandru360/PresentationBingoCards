

import { Component, OnInit, Input } from '@angular/core';
import { ICreateMeeting } from 'bingo-meeting-objects';
import { ActualMeeting } from 'bingo-cards-api-objects';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { CardsService } from './cards.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



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
  meetingName: string = '';
  meetingId: any;
  nameParticipant: string;
  // _show: boolean = true;
  // meetingShow: boolean;
  message: any[] = [];
  errMessage: any[] = [];
  participants: any[] = [];
  msgUsr: string;
  @Input() m; 


  constructor(private formBuilder: FormBuilder, private cardsService: CardsService, private _snackBar: MatSnackBar) {
    this.meetings = [];

    // why this gives an compilation error if we put new CreateMeeting ? references?
    const c: ICreateMeeting = { userName: '', meetingName: '' };
    this.createMeetingForm = this.formBuilder.group(c, Validators.required);
  }
  // _nameParticipant = this.createMeetingForm.get('userName').value;

  openSnackBar(snackMessage: string, action: string, config?) {
    this._snackBar.open(snackMessage, action, {
      duration: 2500,
      panelClass: 'center'
    });
  }
  dismissSnack() {
    this._snackBar.dismiss();
  }
  toggle(idMeeting) {
    this.meetings['idMeeting']= !this.meetings['idMeeting'];
  }
  // toggle2() {
  //   this.meetingShow = false;
  //   this._show = true;
  // }
  get _nameParticipant(): any {
    return this.createMeetingForm.get('userName').value;
  }
  getMeetingValue(id) {
    // console.log(this.meetings);
    this.meetingName = id;
  }

  // show(m) {
  //   console.log(m);
  //   this.meetingShow = m;
  //   this._show = false;
  // }
  addParticipant(idMeeting: string) {
    // console.log(idMeeting);
    // console.log(JSON.stringify(this.message) + "<-")
    if (this._nameParticipant === '' || null) { this.dismissSnack(); this.errMessage.push({ statusText: "Username can't be null" }); } else {
      const participant = {
        meetingId: idMeeting,
        nameParticipant: this._nameParticipant
      };
      // console.log(this.nameParticipant)
      this.cardsService.addParticipant(participant).subscribe(
        data => {
          if (data) {
            this.message = data.Participants;
            this.meetingName = data.Name;
            this.nameParticipant = (data.Participants.slice(-1)[0]).Name;
            // console.log(this.nameParticipant);
            const config = new MatSnackBarConfig();
            // set the CSS class to 'center' into global styles.css
            config.panelClass = 'center';
            this.openSnackBar(`User ${this.nameParticipant} successfully added`, undefined, config);

          } else { this.message = []; }

        },
        err => { if (err) { this.errMessage.push(err); this.dismissSnack(); } else { this.errMessage = []; } }
        // console.log('successfully added the new participant: ' + JSON.stringify(data)),
        // err => console.log('error message :' + JSON.stringify(err))

      );
    }
    return;
  }


  // iterateInMessage(item, idx) {
  //   console.log(item.Participants[item.Participants.length - 1].Name, idx);
  // }





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
