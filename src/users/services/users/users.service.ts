import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'shijin', email: 'shijin@gmail.com', age: 22 },
    { username: 'neymar', email: 'neymar@gmail.com', age: 22 },
    { username: 'pravin', email: 'pravin@gmail.com', age: 26 },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUsers(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return { id, username: 'shijin', email: 'shijin@gmail.com', age: 22 };
  }
}
