import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 selectedProduct: Product;
 isShippingFree: boolean = false;
 arrivalDate: Date;
 quantity: number[];
 modeOfPayment:string;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.quantity = [];
    this.modeOfPayment ="cash"
   }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      if(params['name'] !== null) {
        if (params['name'] === Category[Category.Phones]) {
          let id = +params['id'];
          this.selectedProduct = this.productService.getProductById(Category.Phones,id);
          for( let i = 1; i <= this.selectedProduct.quantity; i++) {
              this.quantity.push(i);
          }
          let noOfDays = 10;
          console.log("productList",this.selectedProduct);
        }
      }
    });
  }

  writeReview(){}


}


