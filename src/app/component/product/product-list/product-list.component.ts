import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      if(params['name'] !== null) {
        if (params['name'] === Category[Category.Phones]) {
          this.productList = this.productService.getProducts(Category.Phones);
        } else if (params['name'] === Category[Category.Gowns]) {
          this.productList = this.productService.getProducts(Category.Gowns);

        } else if (params['name'] === Category[Category.Sneakers]) {
          this.productList = this.productService.getProducts(Category.Sneakers);

        }
        else if (params['name'] === Category[Category.Bags]) {
          this.productList = this.productService.getProducts(Category.Bags);

        }
        else if (params['name'] === Category[Category.Shirts]) {
          this.productList = this.productService.getProducts(Category.Shirts);

        } else if (params['name'] === Category[Category.Laptops]) {

          this.productList = this.productService.getProducts(Category.Laptops);
        }
      }
    })
  }

}
