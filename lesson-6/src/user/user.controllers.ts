import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersEntity } from '../database/user.entity';
import { UsersPayload } from '../dto/user.dto';
import { UsersService } from '../user/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('id')
  async getUserById(@Query() query: { usersId: number }): Promise<UsersEntity> {
    return await this.usersService.getUserById(query.usersId);
  }

  @Get('email')
  async getUserByEmail(
    @Query() query: { email: string },
  ): Promise<UsersEntity> {
    return await this.usersService.getUserByEmail(query.email);
  }

  @Post('add')
  async createUsersSingle(@Body() user: UsersPayload): Promise<UsersEntity> {
    return await this.usersService.createUsersSingle(user);
  }

  @Post('mod')
  async setUsersRoleModerator(
    @Query() query: { usersId: number },
  ): Promise<string> {
    return await this.usersService.setUsersRoleModerator(query.usersId);
  }
}