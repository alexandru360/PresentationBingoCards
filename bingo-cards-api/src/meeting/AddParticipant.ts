import { ApiModelProperty } from '@nestjs/swagger';
export class AddParticipant {
  @ApiModelProperty()
  readonly userName: string;
  @ApiModelProperty()
  readonly meetingId: string;
}
