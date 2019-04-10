import { Brand } from './../../../models/brand';
import { Component, OnInit, Input, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { templateJitUrl } from '@angular/compiler';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MerchantService } from 'src/app/services/merchant.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategory } from 'src/app/models/SubCategory';

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
  shouldShowBrandCategoryModal: boolean;
  shouldShowSubCategoryModal: boolean;
  thirdCategory: SubCategory[];
  firstSubCatId: number;

  constructor(private modalService: BsModalService, private brandService: BrandsService, private route: Router,
    private categoryService: CategoryService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.firstSubCatId = 1;
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
  openSubCategoryModal() {
    this.shouldShowSubCategoryModal = true;
    this.brandService.updateSubCategoryModalValue(this.shouldShowSubCategoryModal);
  }
  openMerchantModal() {
    this.shouldShowMerchantModal = true;
    this.brandService.updateMerchantModalValue(this.shouldShowMerchantModal);
  }
  openStoreModal() {
    this.shouldShowStoreModal = true;
    this.brandService.updateStoreModalValue(this.shouldShowStoreModal);
  }
  openBrandCategoryModal() {
    this.shouldShowBrandCategoryModal = true;
    this.brandService.updateBrandCategoryModalValue(this.shouldShowBrandCategoryModal);
  }
  changeRoute(categoryId: number) {
    this.route.navigate(['products'], { queryParams: { categoryId: categoryId } });
  }
  loadThirdCat(subCatId: number, catId: number) {
    console.log('i just ran men');
    this.categoryService.getThirdSubCategories(subCatId, catId).subscribe(res => {
      this.thirdCategory = res;
    });
  }

}
