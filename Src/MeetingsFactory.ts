class MeetingsFactory{
    public CreateMeeting(userName:string, meetingName: string): Meeting{        
        let p = new Participant();
        p.Id = Guid.newGuid();
        p.Name = userName;

        let m = new Meeting();
        m.Id = Guid.newGuid();
        m.Name = meetingName;
        m.Participants.push(p);
        return new Meeting();
    }
}