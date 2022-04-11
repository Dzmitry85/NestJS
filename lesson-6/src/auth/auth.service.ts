import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from '../database/user.entity';
import { compare } from '../utils/crypto';
import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UsersEntity | null> {
    const _user = await this.usersService.getUserByEmail(email);
    if (_user && (await compare(pass, _user.password))) {
      return _user;
    }
    return null;
  }

  async login(user: any) {
    const payload = user;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verify(token: string) {
    return this.jwtService.verify(token);
  }
}