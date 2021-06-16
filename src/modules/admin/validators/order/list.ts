import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { OrderValidator } from 'modules/common/validators/order';

export class OrderListValidator extends OrderValidator {
  @IsString()
  @IsOptional()
  @IsIn(['description', 'quantity', 'value'])
  @ApiProperty({ required: false, enum: ['description', 'quantity', 'value'] })
  public orderBy: string;
}
