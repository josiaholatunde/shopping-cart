import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/User';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';


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
  userIsAdmin = true;
  user = {
    isAdmin: true
  };
  isLoggedIn: boolean;

  constructor(private productService: ProductService, private router: Router, private alertify: AlertifyService,
    private brandService:  BrandsService, private authService: AuthService) {
    this.productQty = [];
    this.counter = 0;
   }

  ngOnInit() {
      for (let i = 1; i <= this.product.quantityAvailable; i++) {
        this.productQty[i] = i;
      }
      this.userQty = this.product.quantityAvailable;
      if (this.authService.isUserAdmin()) {
        this.userIsAdmin = true;
        this.isLoggedIn = true;
      }
      this.authService.userLoggedInObservable().subscribe(status => {
        this.isLoggedIn = status;
        if (status) {
          if (this.authService.isUserAdmin()) {
            this.userIsAdmin = true;
          }
        }
      });
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
  editProduct(code: string, catId: number) {
    this.router.navigate(['products/edit'], {queryParams: {categoryId: catId, code}});
    this.brandService.updateProductModalValue(true);
  }
  deleteProduct(code: string) {
    this.alertify.confirm('Are you sure you want to delete this Poduct? ', () => {
      this.productService.deleteProductById(code).subscribe(() => {
        this.alertify.success('Successfully deleted Product');
      }, err => this.alertify.error(err.error),
      () => {
        this.router.navigate(['products'], { queryParams: { categoryId: this.product.categoryId } });
      });
    });
  }

}
