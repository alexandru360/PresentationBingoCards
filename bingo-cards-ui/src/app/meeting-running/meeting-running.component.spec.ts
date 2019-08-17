import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRunningComponent } from './meeting-running.component';

describe('MeetingRunningComponent', () => {
  let component: MeetingRunningComponent;
  let fixture: ComponentFixture<MeetingRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
