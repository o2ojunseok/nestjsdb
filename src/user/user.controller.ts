import { Controller, Get, Post, Body, Param, Delete, HttpCode, Session } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(200)
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // @Post('login')
  // @HttpCode(200)
  // login(@Body() body, @Session() session) {
  //   return this.userService.login(body, session);
  // }

  @Post('signup')
  @HttpCode(200)
  create(@Body() user: User) {
    this.userService.signUp(user);
    return `welcome! ${user.userName}`;
  }

  // @Post('logout')
  // @HttpCode(200)
  // logout(@Session() session) {
  //   return this.userService.logout(session);
  // }

  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id') id: number) {
    this.userService.delete(id);
    return `delete success ${id}`;
  }
}
