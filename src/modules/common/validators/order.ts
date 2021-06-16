import { ApiProperty } from '@nestjs/swagger';

export abstract class OrderValidator {
  @ApiProperty({ required: true, type: String })
  public description: string;

  @ApiProperty({ required: true, type: Number, minimum: 1 })
  public quantity: number;

  @ApiProperty({ required: true, type: Number, minimum: 1 })
  public value: number;

  public abstract orderBy: string;
}
