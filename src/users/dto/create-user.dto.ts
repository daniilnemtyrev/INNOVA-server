import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  readonly id: number;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  readonly surname: string;

  readonly name: string;

  readonly patronymic: string;

  readonly employee_post: string;

  readonly student_status: string;

  readonly birthdate: string;

  readonly phone: string;

  readonly move: string;

  @IsNotEmpty()
  @Length(4, 20)
  readonly password: string;
}
