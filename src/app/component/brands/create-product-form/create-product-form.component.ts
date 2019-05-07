import { Product } from 'src/app/models/product';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { Merchant } from './../../../models/merchant';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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
import { FormMode } from 'src/app/models/FormMode';
import { Feature } from 'src/app/models/Feature';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss']
})
export class CreateProductFormComponent implements OnInit {

  productFormgroup: FormGroup;
  modalRef: BsModalRef;
  @Input() categories: Category[];
  brands: Brand[] = [];
  merchants: Merchant[];
  @ViewChild('templateProduct') templateProduct: TemplateRef<any>;
  stores: Store[];
  imagePreview: string;
  formMode = FormMode.create;
  productId: number;
  productCode: any;
  prodFeatures: Feature[];
  features: Feature[];
  categoryId: number;


  constructor(private fb: FormBuilder, private modalService: BsModalService, private productService: ProductService,
    private router: Router,
    private alertify: AlertifyService, private brandService: BrandsService, private storeService: StoreService,
    private categoryService: CategoryService, private merchantService: MerchantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initialiseProductForm();
    this.brandService.currentProductModalObservable().subscribe(res => {
      this.route.queryParamMap.subscribe((param: Params) => {
        if (param.params['code']) {
          this.formMode = FormMode.edit;
          this.productService.getProductById(param.params['code']).subscribe((product: Product) => {
            const {name, categoryId, price, brandId, imgUrl, storeId, categoryName, merchantName, merchantId, quantityAvailable,
              pickUpAvailable, id, features }
             = product;
            this.productId = id;
            this.categoryId = categoryId;
            this.productCode = param.params['code'];
            this.prodFeatures = features;

            this.resetDynamicForm();
             forkJoin(
               this.merchantService.getMerchants(),
               this.categoryService.getCategories(),
               this.storeService.getStores(),
               this.brandService.getBrands(this.productFormgroup.value.categoryId
                )).subscribe(([res1, res2, res3, res4]) => {
                    this.merchants = res1;
                    this.categories = res2;
                    this.stores = res3;
                    this.brands = res4;
            });
            const newFeatures = [];
            for (let index = 0; index < features.length; index++) {
              const featuresO = {
                key: features[index].key,
                value: features[index].value
              };
              newFeatures.push(featuresO);
                (this.productFormgroup.controls['features'] as FormArray).push(this.createItem());
            }
            this.imagePreview = imgUrl;
            this.productFormgroup.setValue({
              name,
              categoryId,
              price,
              brandId,
              merchantId,
              storeId,
              quantityAvailable,
              pickUpAvailable,
              image: imgUrl,
              features: [...newFeatures]
            });
            this.productFormgroup.updateValueAndValidity();
          });
        } else {
          forkJoin(this.merchantService.getMerchants(),
             this.categoryService.getCategories(),
             this.storeService.getStores())
            .subscribe(([res1, res2, res3]) => {
              this.merchants = res1;
              this.categories = res2;
              this.stores = res3;
            });
            this.formMode = FormMode.create;
        }
      });
      this.openModal(this.templateProduct);
    });
  }

  resetDynamicForm() {
    const control = <FormArray>this.productFormgroup.controls['features'];
    for (let index = control.length - 1; index >= 0; index--) {
      control.removeAt(index);
    }
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
    this.productFormgroup = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      categoryId: [null, Validators.required],
      price: [null, Validators.required],
      brandId: [null, Validators.required],
      merchantId: [null, Validators.required],
      storeId: [null, Validators.required],
      quantityAvailable: [null, Validators.required],
      pickUpAvailable: ['false', Validators.required],
      image: ['', Validators.required],
      features: this.fb.array([this.createItem()])
    });
  }
  createItem(): any {
    return this.fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required]
    });
  }
  addNext() {
    (this.productFormgroup.controls['features'] as FormArray).push(this.createItem());
  }
  closeModal() {
    if (this.productFormgroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.productFormgroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
    this.resetDynamicForm();
    this.router.navigate(['products'], { queryParams: { categoryId: this.categoryId } });
  }

  showFeatures() {
  }

  submitProductForm() {
    if (this.productFormgroup.invalid) {
      return;
    }
    const {name, quantityAvailable, categoryId, brandId, merchantId, price, storeId, pickUpAvailable, features, image} =
    this.productFormgroup.value;
    if (this.formMode === FormMode.create) {
    const productToCreateDto = {
      name,
      quantityAvailable,
      categoryId,
      brandId,
      merchantId,
      price,
      storeId,
      pickUpAvailable,
      features,
      image
    };
      this.productService.createProduct(productToCreateDto).subscribe(res => {
        this.alertify.success('Successfully created Product');
      }, err => this.alertify.error(err),
      () => {
        this.productFormgroup.reset();
        const control = <FormArray>this.productFormgroup.controls['features'];
        for (let index = control.length - 1; index >= 0; index--) {
          control.removeAt(index);
        }
        this.modalRef.hide();
      });
    } else {
      const newFeatures = [];
          for (let index = 0; index < this.prodFeatures.length; index++) {
            const featuresO = {
              id: this.prodFeatures[index].id,
              key: features[index].key,
              value: features[index].value
            };
          }
      const productToCreateDto = {
        id: this.productId,
        code: this.productCode,
        name,
        quantityAvailable,
        categoryId,
        brandId,
        merchantId,
        price,
        storeId,
        pickUpAvailable,
        features,
        image
      };
      this.productService.editProduct(productToCreateDto).subscribe(res => {
        this.alertify.success('Successfully created Product');
      }, err => this.alertify.error(err),
      () => {
        this.productFormgroup.reset();
        const control = <FormArray>this.productFormgroup.controls['features'];
        for (let index = control.length - 1; index >= 0; index--) {
          control.removeAt(index);
        }
        this.modalRef.hide();
        this.router.navigate(['products'], { queryParams: { categoryId: categoryId } });
      });

    }
  }
  onImagePicked($event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.productFormgroup.patchValue({image: <File>file});
    this.productFormgroup.updateValueAndValidity();
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.imagePreview = fileReader.result as string;
    };
    fileReader.readAsDataURL(file);
  }

}
