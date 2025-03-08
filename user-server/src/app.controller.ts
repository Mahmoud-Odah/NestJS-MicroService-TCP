import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get Users => Message Pattern (Request-Response)
  // what is cmd ? cmd is a key that we can use to identify the message
  @MessagePattern({ cmd: 'GET_ALL_USERS' })
  async getUsers() {
    return this.appService.getUsers();
  }

  // Post User => Message Pattern (Event-Driven)
  @EventPattern('CREATE_USER')
  async createUser(user: { name: string; email: string }) {
    this.appService.createUser(user);
  }
}
