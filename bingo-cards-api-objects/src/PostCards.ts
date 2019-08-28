import { ApiModelProperty } from '@nestjs/swagger';
import {ICreateMeeting} from"bingo-meeting-objects";
export class CreateCards implements ICreateMeeting {
  @ApiModelProperty()
  userName: string;
  @ApiModelProperty()
  meetingName: string;
}