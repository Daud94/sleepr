import { CardDto } from '@app/common/dto/card.dto';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChargeDto {
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested({ each: true })
  @Type(() => CardDto)
  card: CardDto;

  @IsNumber()
  amount: number;
}
