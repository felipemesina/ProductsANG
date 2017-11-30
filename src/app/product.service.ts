import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: Array<any> = [
    { name: "Keyboard", desc: "A new keyboard", price: 49.99, quantity: 22, created_at: Date }
  ];

  getProducts() {
      return this.products;
  }

  addProduct(newProduct) {
    this.products.push(newProduct);
  }

  delete() {

  }

  constructor() { }

}
