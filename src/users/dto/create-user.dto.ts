import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  readonly id: number;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  readonly name: string;

  @IsNotEmpty()
  @Length(4, 20)
  readonly password: string;
}
