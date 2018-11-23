import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  productCategory: string
  constructor() { }

  ngOnInit() {
      this.productCategory = Category[this.product.category];
  }

}
