import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: any[] = [];

  getUsers() {
    return this.users.length > 0
      ? this.users
      : new NotFoundException('No users found');
  }

  createUser(user: { name: string; email: string }) {
    this.users.push(user);
  }
}