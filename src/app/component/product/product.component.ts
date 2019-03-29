import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  productCategory: string;
  display = false;
  productQty: number[];
  userQty: number;
  counter: number;

  constructor(private productService: ProductService, private router: Router) {
    this.productQty = [];
    this.counter = 0;
   }

  ngOnInit() {
      for (let i = 1; i <= this.product.quantityAvailable; i++) {
        this.productQty[i] = i;
      }
      this.userQty = this.product.quantityAvailable;
      // get productNameWidth

  }
  addToCart() {
    const product = this.product;
    product.quantityAvailable = this.userQty;
    this.productService.addToCart(product);
    this.router.navigateByUrl('/product/cart');

  }

  showDialog() {
    this.display = true;
  }

}
