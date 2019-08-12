import {MeetingService} from "bingo-cards-api-objects/src/meeting.service";
import { Meeting } from "bingo-meeting-objects";
import { ActualMeeting } from "bingo-cards-api-objects/src/ActualMeeting";

describe("Meetings API service creation", () => {
    it("a meeting should have been created properly ", async () => {
        const ms: MeetingService =new MeetingService();
        const userName:string = "Andrei";
        const meetingName:string = "Meeting today"
        const m:Meeting =await  ms.create(userName,meetingName);
        expect(m.Name).toBe(meetingName);
        expect(m.Participants.length).toBe(1);
        expect(m.Participants[0].Name).toBe(userName);
      });
      it("a meeting should have been retrieved properly ", async () => {
        const ms: MeetingService =new MeetingService();
        const userName:string = "Andrei";
        const meetingName:string = "Meeting today"
        const m :Meeting=await  ms.create(userName,meetingName);
        const retr :ActualMeeting[]= ms.ActualMeetings();

        expect(retr.length).toBe(1);

        expect(retr[0].idMeeting).toBe(m.Id);
        expect(retr[0].participantName).toBe(userName);

      });
  });