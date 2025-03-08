import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private product: any[] = [];

  getProducts() {
    return this.product.length > 0
      ? this.product
      : new NotFoundException('No product found');
  }

  createProduct(product: { name: string; quantity: number }) { 
    this.product.push(product);
  }
}
