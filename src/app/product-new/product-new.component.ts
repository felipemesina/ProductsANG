import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './../product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  @Output() createProduct = new EventEmitter();
  newProduct: Product = new Product;
  products: Array<any> = [];


  constructor(private _productService: ProductService) {
    this.products = this._productService.products
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createProduct.emit(this.newProduct);
    this.newProduct = new Product();

  }



}
