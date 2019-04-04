import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit {

  cartItems: Product[];
  totalPrice: number;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.cartItems = this.productService.getCartItems();
    this.totalPrice = this.cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantityOrdered), 0);
  }

}
