import { ApiModelProperty } from '@nestjs/swagger';

export class AddParticipant {
    @ApiModelProperty()
  meetingId: any;
  @ApiModelProperty()
  nameParticipant: string;
}
