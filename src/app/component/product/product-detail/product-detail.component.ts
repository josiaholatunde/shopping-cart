import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Category } from "src/app/models/category";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product;
  isShippingFree = false;
  arrivalDate: Date;
  quantity: number[];
  modeOfPayment: string;
  reviewCount: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.quantity = [];
    this.modeOfPayment = "cash";
    this.reviewCount = 5;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['name'] !== null) {
        if (params['id'] != null) {
          this.productService.getProductById(params['id']).subscribe(res => {
            this.selectedProduct = res;
            for (let i = 1; i <= this.selectedProduct.quantityAvailable; i++) {
              this.quantity.push(i);
            }
          });
        }
      }
    });
  }

  writeReview() {}
}
