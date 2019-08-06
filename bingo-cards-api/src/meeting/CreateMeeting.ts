import { ApiModelProperty } from '@nestjs/swagger';

export class CreateMeeting {
  @ApiModelProperty()
  readonly userName: string;
  @ApiModelProperty()
  readonly meetingName: string;
}
