import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from '@prisma/client';

export class CreateUserDto implements Omit<User, 'id'> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
