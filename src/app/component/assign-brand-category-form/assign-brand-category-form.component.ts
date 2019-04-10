import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Brand } from 'src/app/models/brand';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-assign-brand-category-form',
  templateUrl: './assign-brand-category-form.component.html',
  styleUrls: ['./assign-brand-category-form.component.css']
})
export class AssignBrandCategoryFormComponent implements OnInit {

  @Input() shouldShowModal: boolean;
  @Input() categories: Category;
  @ViewChild('template') template: TemplateRef<any>;
  modalRef: BsModalRef;
  assignBrandCategoryFormGroup: FormGroup;
  brands: Brand[];


  constructor(private modalService: BsModalService, private brandService: BrandsService, private productService: ProductService,
     private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.brandService.currentBrandCategoryModalObservable().subscribe(res => {
      this.openModal(this.template);
      this.brandService.getAllBrands().subscribe((brands: Brand[]) => {
        this.brands = brands;
      });
    });
    this.initialiseAssignBrandCategoryForm();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  loadBrands() {
    if (this.assignBrandCategoryFormGroup.value.categoryId) {
      this.brandService.getBrands(this.assignBrandCategoryFormGroup.value.categoryId).subscribe(res => {
        this.brands = res;
      });
    }
    return;
  }
  closeModal() {
    if (this.assignBrandCategoryFormGroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.assignBrandCategoryFormGroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
  }

  initialiseAssignBrandCategoryForm(): any {
    this.assignBrandCategoryFormGroup = new FormGroup({
      categoryId: new FormControl(null, {validators: [Validators.required]}),
      brandId: new FormControl(null, {validators: [Validators.required]})
    });
  }
  submitAssignBrandForm() {
    if (this.assignBrandCategoryFormGroup.invalid) {
      return;
    }
    const { categoryId, brandId} = this.assignBrandCategoryFormGroup.value;
    this.productService.assignBrandCategory(categoryId, brandId).subscribe(res => {
      this.alertify.success('Successfully assigned Brand Category');
    }, err => this.alertify.error(err),
    () => {
      this.modalRef.hide();
      this.assignBrandCategoryFormGroup.reset();
    });

  }

}
