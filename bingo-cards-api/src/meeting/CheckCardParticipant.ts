import { ApiModelProperty } from '@nestjs/swagger';

export class CheckCardParticipant {
  @ApiModelProperty()
  readonly userName: string;
  @ApiModelProperty()
  readonly cardId: number;
}
