import { IsEmail, IsMongoId, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsMongoId()
  _id: string;
}
