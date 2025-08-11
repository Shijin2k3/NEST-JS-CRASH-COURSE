import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getUser() {
    return this.userService.fetchUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const user = this.userService.fetchUserById(id);
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return this.userService.createUsers(userData);
  }
}
