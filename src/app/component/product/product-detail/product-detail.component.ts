import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product;
  isShippingFree = false;
  arrivalDate: Date;
  quantity: number[];
  modeOfPayment: string;
  reviewCount: number;
  showReturn: boolean;
  showDescription = true;
  showShipping: boolean;
  showOverview: boolean;
  showWarranty: boolean;
  showReview: boolean;
  availableQty: number;
  displayQty: number;
  greyDecrementBtn: boolean;
  greyIncrementBtn: boolean;
  showErrorMessage: boolean;
  initialOfMerchant: string;
  constructor(
    private route: ActivatedRoute,
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {
    this.quantity = [];
    this.modeOfPayment = 'cash';
    this.reviewCount = 5;
    this.displayQty = 1;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['name'] !== null) {
        if (params['id'] != null) {
          this.productService.getProductById(params['id']).subscribe(res => {
            this.selectedProduct = res;
            this.getInitialOfMerchant(this.selectedProduct.merchantName);
            this.availableQty = this.selectedProduct.quantityAvailable;
          });
        }
      }
    });
  }
  getInitialOfMerchant(merchantName: string): any {
    this.initialOfMerchant = merchantName.substr(0, 1);
  }
  decrement() {
    this.showErrorMessage = false;
    if (this.displayQty <= 1) {
        this.greyDecrementBtn = true;
        this.greyIncrementBtn = false;
    } else {
      this.displayQty--;
    }
  }

  addToCart() {
    if (!this.productService.cartItemExists(this.selectedProduct.name)) {
      this.selectedProduct.quantityOrdered = this.displayQty;
      this.productService.addToCart(this.selectedProduct);
      this.alertifyService.success('Product successfully added to the cart');
    } else {
      this.alertifyService.error('You have added this item to the cart');
    }
  }

  increment() {
    if (this.displayQty >= this.availableQty) {
        this.greyIncrementBtn = true;
        this.greyDecrementBtn = false;
        this.showErrorMessage = true;
    } else {
      this.displayQty++;
    }
  }

  writeReview() {}
  setFeature(feature: string) {
    if (feature === 'overview') {
      this.showOverview = true;
      this.showShipping = false;
      this.showDescription = false;
      this.showReturn = false;
      this.showWarranty = false;
      this.showReview = false;

    } else if (feature === 'shipping') {

      this.showOverview = false;
      this.showShipping = true;
      this.showDescription = false;
      this.showReturn = false;
      this.showReview = false;
      this.showWarranty = false;


    } else if (feature === 'description') {

      this.showOverview = false;
      this.showShipping = false;
      this.showDescription = true;
      this.showReturn = false;
      this.showWarranty = false;
      this.showReview = false;


    } else if (feature === 'warranty') {

      this.showOverview = false;
      this.showShipping = false;
      this.showDescription = false;
      this.showReturn = false;
      this.showWarranty = true;
      this.showReview = false;


    } else if (feature === 'return-policy') {

      this.showOverview = false;
      this.showShipping = false;
      this.showDescription = false;
      this.showReturn = true;
      this.showWarranty = false;
      this.showReview = false;
    } else {
      this.showOverview = false;
      this.showShipping = false;
      this.showDescription = false;
      this.showReturn = false;
      this.showWarranty = false;
      this.showReview = true;
    }
  }
}
