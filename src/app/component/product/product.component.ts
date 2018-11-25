import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  productCategory: string
  display: boolean = false;
  productQty: number[];
  userQty: number;
  counter: number;

  constructor(private productService: ProductService, private router: Router) {
    this.productQty = [];
    this.counter = 0;
   }

  ngOnInit() {
      console.log("Prod",this.product);

      this.productCategory = Category[this.product.category];
      for (let i = 0; i <= this.product.quantity; i++) {
        this.productQty[i] = i;
      }
      this.userQty = this.product.quantity;
  }
  addToCart() {
    let product = this.product;
    product.quantity = this.userQty;
    this.productService.addToCart(product);
    this.router.navigateByUrl('/product/cart');

  }

  showDialog() {
    this.display = true;
  }

}
