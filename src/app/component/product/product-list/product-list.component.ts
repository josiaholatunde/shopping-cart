import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { forkJoin } from 'rxjs';
import { BrandsService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { AlertifyService } from 'src/app/services/alertify.service';


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
  searchParams: any = {};
  categoryId: any;
  brandsReference: Brand[];
  constructor(private route: ActivatedRoute, private productService: ProductService, private brandsService: BrandsService
    , private alertify: AlertifyService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((param: Params) => {
      if (param.params['categoryId']) {
       this.categoryId = param.params['categoryId'];
        forkJoin(this.productService.getProducts(this.categoryId),
                  this.brandsService.getBrands(this.categoryId)).subscribe(([res, res2]) => {
                    this.productList = res;
                    this.productType = this.productList[0].categoryName;
                    this.brands = res2;
                    this.brandsReference = this.brands;

        });
      }
    });
  }
  filterMinMaxPrice() {
    if (Number(this.searchParams.minPrice) > Number(this.searchParams.maxPrice)) {
        this.alertify.error('Invalid input');
    } else {
      const price = `${this.searchParams.minPrice}-${this.searchParams.maxPrice}`;
      this.productService.getProducts(this.categoryId, null, price).subscribe(res => {
        this.productList = res;
      });
    }
  }
  filterPrice() {
    this.productService.getProducts(this.categoryId, null, this.searchParams.price).subscribe(res => {
      this.productList = res;
    });
  }
  filterProducts() {
    let str = '';
    this.brands.forEach(( br , i) => {
      if (br.isChecked) {
        str += br.id + ',';
      }
    });
    str = str.slice(0, str.length - 1);
    this.productService.getProducts(this.categoryId, str).subscribe(res => {
      this.productList = res;
    });
  }
  makeActive() {
    this.isActive = true;
  }
  filterBrand() {
    const res: Brand[] = [];
    this.brands = this.brandsReference;
    this.brands.forEach(b => {
      if (b.name.toLowerCase().startsWith(this.searchParams.brandName.toLowerCase())) {
        res.push(b);
      }
    });
    this.brands = res;
  }

}
