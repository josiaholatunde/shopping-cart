import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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
import { Merchant } from 'src/app/models/merchant';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.scss']
})
export class SalesFormComponent implements OnInit {

  salesFormgroup: FormGroup;
  modalRef: BsModalRef;
  @Input() categories: Category[];
  brands: Brand[] = [];
  merchants: Merchant[];
  @ViewChild('templateSales') templateSales: TemplateRef<any>;
  stores: Store[];
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
    this.initialiseSalesForm();
    this.brandService.currentProductModalObservable().subscribe(res => {
      this.openModal(this.templateSales);
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
  initialiseSalesForm(): any {
    this.salesFormgroup = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      address: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      price: [null, Validators.required],
      zipCode: [null, Validators.required],
      totalAmount: [null, Validators.required],
      modeOfPayment: [null, Validators.required],
      paymentReferenceId: [null, Validators.required]
    });
  }
  closeModal() {
    if (this.salesFormgroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.salesFormgroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
    this.router.navigate(['products/cart']);
  }

  showFeatures() {
  }

  submitProductForm() {
    if (this.salesFormgroup.invalid) {
      return;
    }
    const { name, address, phoneNumber, price, zipCode, totalAmount, modeOfPayment, paymentReferenceId } =
    this.salesFormgroup.value;
    const saleToCreateDto = {
      name,
      address,
      phoneNumber,
      price,
      zipCode,
      totalAmount,
      modeOfPayment,
      paymentReferenceId,
    };
      this.productService.createProduct(saleToCreateDto).subscribe(res => {
        this.alertify.success('Successfully created Sales');
      }, err => this.alertify.error(err),
      () => {
        this.salesFormgroup.reset();
        this.modalRef.hide();
      });
  }



}
