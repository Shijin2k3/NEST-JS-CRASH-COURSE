import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'shijin', email: 'shijin@gmail.com' },
    { username: 'neymar', email: 'neymar@gmail.com' },
    { username: 'pravin', email: 'pravin@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUsers(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'shijin', email: 'shijin@gmail.com' };
  }
}
