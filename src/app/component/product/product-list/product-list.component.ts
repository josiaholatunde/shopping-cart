import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { forkJoin } from 'rxjs';
import { BrandsService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  productType: string;
  isActive = false;
  brands: Brand[];
  name: string;
  constructor(private route: ActivatedRoute, private productService: ProductService, private brandsService: BrandsService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((param: Params) => {
      if (param.params['categoryId']) {
       const categoryId = param.params['categoryId'];
        forkJoin(this.productService.getProducts(categoryId),
                  this.brandsService.getBrands(categoryId)).subscribe(([res, res2]) => {
                    this.productList = res;
                    this.productType = this.productList[0].categoryName;
                    this.brands = res2;
        });
      }
    });


  }
  makeActive() {
    this.isActive = true;
  }

}
