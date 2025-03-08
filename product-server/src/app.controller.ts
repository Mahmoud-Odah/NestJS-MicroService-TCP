import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get products => Message Pattern (Request-Response)
  // what is cmd ? cmd is a key that we can use to identify the message
  @MessagePattern({ cmd: 'GET_ALL_PRODUCTS' })
  async getProducts() {
    return this.appService.getProducts();
  }

  // Post product => Message Pattern (Event-Driven)
  @EventPattern('CREATE_PRODUCT')
  async createProduct(product: { name: string; quantity: number }) {
    this.appService.createProduct(product);
  }
}
