import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting, ICreateMeeting } from 'bingo-meeting-objects';
import { ActualMeeting } from 'bingo-cards-api-objects';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private urlApi = 'http://bingo-meeting-api.herokuapp.com/';

  constructor(private httpAPI: HttpClient) {

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
