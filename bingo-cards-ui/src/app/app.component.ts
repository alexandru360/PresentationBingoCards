import { Component } from '@angular/core';
import {Meeting, ICreateMeeting} from 'bingo-meeting-objects';
import {CreateMeeting} from 'bingo-cards-api-objects';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'bingo-cards-ui';
  meetings: Meeting[];
  createMeetingForm: FormGroup;

  constructor( private formBuilder: FormBuilder) {
    this.meetings = [];
    // why this gives an compilation error if we put new CreateMeeting ? references? 
    const c: ICreateMeeting = {userName: '', meetingName: ''};
    this.createMeetingForm = this.formBuilder.group(c);
  }
  onSubmit(data: ICreateMeeting) {
    // Process checkout data here
    window.alert(JSON.stringify(data));
    this.createMeetingForm.reset();
  }
}
