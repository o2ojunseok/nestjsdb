import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() user: User) {
    this.userService.create(user);
    return `welcome! ${user.email}`;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.userService.delete(id);
    return `delete successfull ${id}`;
  }
}
