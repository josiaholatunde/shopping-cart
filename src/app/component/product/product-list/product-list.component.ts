import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { forkJoin } from 'rxjs';
import { BrandsService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';


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
  totalItems = 0;
  pageSize = 5;
  pageIndex = 1;
  constructor(private route: ActivatedRoute, private productService: ProductService, private brandsService: BrandsService,
    private categoryService: CategoryService, private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {
    this.productService.productsObservable().subscribe(res => {
      this.productList = res;
    });
    this.route.queryParamMap.subscribe((param: Params) => {
      if (param.params['categoryId']) {

       this.categoryId = param.params['categoryId'];
        forkJoin(this.productService.getProducts(this.pageIndex, this.pageSize, this.categoryId),
                  this.brandsService.getBrands(this.categoryId),
                  this.categoryService.getCategory(this.categoryId)).subscribe(([res, res2, res3]) => {
                    this.totalItems = parseInt(res.count, 10),
                    this.productList = res.products;
                    this.productType = res3.name;
                    this.brands = res2;
                    this.brandsReference = this.brands;
                    this.productService.updateProducts([...this.productList]);
        });
      }

    });
    if (this.router.url.endsWith('latest')) {
      this.productType = 'New Arrivals';
      forkJoin(this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null),
      this.brandsService.getAllBrands()).subscribe(([res, res2]) => {
          this.productList = res.products;
          this.totalItems = parseInt(res.count, 10);
          this.brands = res2;
          this.brandsReference = this.brands;
          this.productService.updateProducts([...this.productList]);
      });
    } else if (this.router.url.endsWith('top-picks')) {
      this.productType = 'Top Picks';
      forkJoin(this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null),
      this.brandsService.getAllBrands()).subscribe(([res, res2]) => {
          this.productList = res.products;
          this.totalItems = parseInt(res.count, 10);
          this.brands = res2;
          this.brandsReference = this.brands;
          this.productService.updateProducts([...this.productList]);
      });
    }

  }
  filterMinMaxPrice() {
    if (Number(this.searchParams.minPrice) > Number(this.searchParams.maxPrice)) {
        this.alertify.error('Invalid input');
    } else {
      const price = `${this.searchParams.minPrice}-${this.searchParams.maxPrice}`;
      if (this.productType === 'New Arrivals') {
        this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null,
          price).subscribe(res => {
          this.productList = res.products;
          this.totalItems = parseInt(res.count, 10);
        });
      } else if (this.productType === 'Top Picks') {
        this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null,
          price).subscribe(res => {
          this.productList = res.products;
          this.totalItems = parseInt(res.count, 10);
        });
      } else {
        this.productService.getProducts(this.pageIndex, this.pageSize, this.categoryId, null, price).subscribe(res => {
          this.productList = res.products;
          this.totalItems = parseInt(res.count, 10);
        });
      }
    }
  }
  filterPrice() {
    if (this.productType === 'New Arrivals') {
      this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null,
        this.searchParams.price).subscribe(res => {
        this.productList = res.products;
        this.totalItems = parseInt(res.count, 10);
      });
    }  else if (this.productType === 'Top Picks') {
      this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null,
        this.searchParams.price).subscribe(res => {
        this.productList = res.products;
        this.totalItems = parseInt(res.count, 10);
      });
    } else {
      this.productService.getProducts(this.pageIndex, this.pageSize, this.categoryId, null, this.searchParams.price).subscribe(res => {
        this.productList = res.products;
        this.totalItems = parseInt(res.count, 10);
      });
    }
  }
  filterProducts() {
    let str = '';
    this.brands.forEach(( br , i) => {
      if (br.isChecked) {
        str += br.brandId + ',';
      }
    });
    str = str.slice(0, str.length - 1);
    if (this.productType === 'New Arrivals') {
      this.getAllProducts();
    } else {
      this.getProducts();
    }
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
  pageChanged(event: PageChangedEvent): void {
    this.pageIndex = event.page;
    if (this.productType === 'New Arrivals') {
       this.getAllProducts();
    } else if (this.productType === 'Top Picks') {
      this.getAllProducts();
    } else {
       this.getProducts();
    }
  }

  getProducts() {
    this.productService.getProducts(this.pageIndex, this.pageSize, this.categoryId, null).subscribe(res => {
      this.productList = res.products;
      this.totalItems = parseInt(res.count, 10);
    });
  }

  getAllProducts() {
    this.productService.getLatestProducts(this.pageIndex, this.pageSize, this.categoryId, null).subscribe(res => {
      this.productList = res.products;
      this.totalItems = parseInt(res.count, 10);
    });
  }

}
