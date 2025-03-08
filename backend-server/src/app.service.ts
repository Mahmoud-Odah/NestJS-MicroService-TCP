import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserCreatedEvent } from './events/user-event';
import { ProductCreatedEvent } from './events/product-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
  ) {}

  getAllUsers() {
    return this.userClient.send({ cmd: 'GET_ALL_USERS' }, {});
  }

  createUser(user: { name: string; email: string }) {
    this.userClient.emit(
      'CREATE_USER',
      new UserCreatedEvent(user.name, user.email),
    );
  }

  getAllProducts() {
    return this.productClient.send({ cmd: 'GET_ALL_PRODUCTS' }, {});
  }

  createProduct(product: { name: string; quantity: number }) {
    this.productClient.emit(
      'CREATE_PRODUCT',
      new ProductCreatedEvent(product.name, product.quantity),
    );
  }
}
