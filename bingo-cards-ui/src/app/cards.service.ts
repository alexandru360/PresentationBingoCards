import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting, ICreateMeeting } from 'bingo-meeting-objects';
import { ActualMeeting } from 'bingo-cards-api-objects';
import { environment } from './../environments/environment';

// import { inject } from '@angular/core/testing';
// import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private urlApi = '';
  // private protocol: string;
  constructor(/*@Inject(DOCUMENT)private doc: Document, */ private httpAPI: HttpClient) {
    // this.protocol = doc.location.protocol;
    this.urlApi = environment.urlApi;
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
  public CreateCards(id, create: ICreateMeeting): Observable<Meeting> {
    const url: string = this.urlApi + 'meetings/' + id + '/checkCard';
    return this.httpAPI.put<Meeting>(url, create);
  }
}
