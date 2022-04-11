import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Role } from '../auth/roles.enum';

export class UsersPayload {
  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsString()
  password!: string;

  @IsEnum(Role)
  roles: Role;
}