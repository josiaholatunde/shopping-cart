import { Brand } from './../../../models/brand';
import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { templateJitUrl } from '@angular/compiler';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'app-navbar-detail',
  templateUrl: './navbar-detail.component.html',
  styleUrls: ['./navbar-detail.component.scss']
})
export class NavbarDetailComponent implements OnInit {

  @Input() categories: Category[];
  @ViewChild('template') template: ElementRef;
  shouldShow = false;
  hideHamburger: boolean;

  brandFormGroup: FormGroup;
  shouldShowModal: boolean;
  shouldShowproductModal: boolean;
  shouldShowCategoryModal: boolean;
  shouldShowMerchantModal: boolean;
  shouldShowBrandModal: boolean;
  shouldShowStoreModal: boolean;

  constructor(private modalService: BsModalService,private brandService: BrandsService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  closeNav() {
    this.shouldShow = false;
    this.hideHamburger = false;
  }
  openNav() {
    this.shouldShow = true;
    this.hideHamburger = true;
  }
  openBrandModal() {
    this.shouldShowBrandModal = true;
    this.brandService.updateBrandModalValue(this.shouldShowBrandModal);
  }
  openProductModal() {
    this.shouldShowproductModal = true;
    this.brandService.updateProductModalValue(this.shouldShowproductModal);
  }
  openCategoryModal() {
    this.shouldShowCategoryModal = true;
    this.brandService.updateCategoryModalValue(this.shouldShowCategoryModal);
  }
  openMerchantModal() {
    this.shouldShowMerchantModal = true;
    this.brandService.updateMerchantModalValue(this.shouldShowMerchantModal);
  }
  openStoreModal() {
    this.shouldShowStoreModal = true;
    this.brandService.updateMerchantModalValue(this.shouldShowStoreModal);
  }

}
