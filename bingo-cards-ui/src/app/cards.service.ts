import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting, ICreateMeeting } from 'bingo-meeting-objects';
import { ActualMeeting } from 'bingo-cards-api-objects';
import { inject } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private urlApi = '//bingo-meeting-api.herokuapp.com/';
  private protocol: string;
  constructor(@Inject(DOCUMENT)private doc: Document, private httpAPI: HttpClient) {
    // this.protocol = doc.location.protocol;
  }
  public GetMeeting(id: string): Observable<Meeting> {

    const url: string = this.urlApi + 'meetings/' + id;
    return this.httpAPI.get<Meeting>(url);
}
  public GetMeetings(): Observable<ActualMeeting[]> {

      const url: string = this.urlApi + 'meetings';
      return this.httpAPI.get<ActualMeeting[]>(url);
  }
  public SaveMeeting(create: ICreateMeeting): Observable<Meeting> {
    const url: string = this.urlApi + 'meetings';
    return this.httpAPI.post<Meeting>(url, create);
  }
}
