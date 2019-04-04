import { Merchant } from './../../../models/merchant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BrandsService } from 'src/app/services/brand.service';
import { Brand } from 'src/app/models/brand';
import { forkJoin } from 'rxjs';
import { MerchantService } from 'src/app/services/merchant.service';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent implements OnInit {

  productFormgroup: FormGroup;
  modalRef: BsModalRef;
  @Input() categories: Category[];
  brands: Brand[] = [];
  merchants: Merchant[];
  @ViewChild('templateProduct') templateProduct: TemplateRef<any>;
  stores: Store[];


  constructor(private modalService: BsModalService, private productService: ProductService, private alertify: AlertifyService,
    private brandService: BrandsService, private storeService: StoreService, private categoryService: CategoryService,
    private merchantService: MerchantService) { }

  ngOnInit() {
    this.initialiseProductForm();
    this.brandService.currentProductModalObservable().subscribe(res => {
      this.openModal(this.templateProduct);
      forkJoin(this.merchantService.getMerchants(),
      this.categoryService.getCategories(),
      this.storeService.getStores())
     .subscribe(([res1, res2, res3]) => {
       this.merchants = res1;
       this.categories = res2;
       this.stores = res3;
       this.productFormgroup.updateValueAndValidity();
     });
    });

  }
  loadBrands() {
    if (this.productFormgroup.value.categoryId) {
      this.brandService.getBrands(this.productFormgroup.value.categoryId).subscribe(res => {
        this.brands = res;
      });
    }
    return;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
  initialiseProductForm(): any {
    this.productFormgroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      categoryId: new FormControl(null, {validators: [Validators.required]}),
      price: new FormControl(null, {validators: [Validators.required]}),
      brandId: new FormControl(null, {validators: [Validators.required]}),
      merchantId: new FormControl(null, {validators: [Validators.required]}),
      storeId: new FormControl(null, {validators: [Validators.required]}),
      quantityAvailable: new FormControl(null, {validators: [Validators.required]}),
      pickupAvailable: new FormControl(null, {validators: [Validators.required]})
    });
  }

  submitProductForm() {
    if (this.productFormgroup.invalid) {
      return;
    }
    const {name, quantityAvailable, categoryId, brandId, merchantId, price, storeId, pickupAvailable} = this.productFormgroup.value;
    const merchantToCreateDto = {
      name,
      quantityAvailable,
      categoryId,
      brandId,
      merchantId,
      price,
      storeId,
      pickupAvailable

    };
    this.productService.createProduct(merchantToCreateDto).subscribe(res => {
      this.alertify.success('Successfully created Merchant');
    }, err => this.alertify.error(err),
    () => {
      this.modalRef.hide();
      this.productFormgroup.reset();
    });
  }

}
