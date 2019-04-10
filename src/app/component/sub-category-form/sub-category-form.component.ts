import { SubCategory } from './../../models/SubCategory';
import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryTypeEnum } from 'src/app/models/CategoryTypeEnum';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-sub-category-form',
  templateUrl: './sub-category-form.component.html',
  styleUrls: ['./sub-category-form.component.css']
})
export class SubCategoryFormComponent implements OnInit {

  @Input() shouldShowModal: boolean;
  @Input() categories: Category;
  @ViewChild('templateSubCategory') templateSubCategory: TemplateRef<any>;
  modalRef: BsModalRef;
  catType =  CategoryTypeEnum.ThirdSubCategory;
  subCategoryFormGroup: FormGroup;
  categoryType = [
    {value: CategoryTypeEnum.SubCategory, displayName: 'SubCategory'},
    {value: CategoryTypeEnum.ThirdSubCategory, displayName: 'ThirdSubCategory'}
  ];
  subCategories: SubCategory[];
  isThirdCatSelected: boolean;

  constructor(private modalService: BsModalService,private brandService: BrandsService, private categoryService: CategoryService,
    private fb: FormBuilder,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.brandService.currentSubCategoryModalObservable().subscribe(res => {
      this.openModal(this.templateSubCategory);
    });
    this.initialiseCategoryForm();

  }
  closeModal() {
    if (this.subCategoryFormGroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.subCategoryFormGroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseCategoryForm(): any {
    this.subCategoryFormGroup = this.fb.group({
      categoryId: [null, Validators.required],
      subCategory: this.fb.array([this.createItem()])
    });
  }
  createItem(): any {
    return this.fb.group({
      name: ['', Validators.required],
      categoryTypeEnum: ['', Validators.required],
      parentSubCatId: ['', Validators.required]
    });
  }
  addNext() {
    (this.subCategoryFormGroup.controls['subCategory'] as FormArray).push(this.createItem());
  }
  submitCategoryForm() {
    if (this.subCategoryFormGroup.invalid) {
      return;
    }

    const { categoryId, subCategory} = this.subCategoryFormGroup.value;
    const mainSubCategory = subCategory;
    mainSubCategory.forEach(element => {
      element.categoryId = categoryId;
    });
    const categoryToCreateDto = {
      subCategory: mainSubCategory
    };

    this.categoryService.createSubCategory(mainSubCategory).subscribe((res) => {
      this.alertify.success('Successfully created brand');
    }, err => this.alertify.error(err),
    () => {
      this.subCategoryFormGroup.reset();
      this.modalRef.hide();
    });
    const control = <FormArray>this.subCategoryFormGroup.controls['subCategory'];
    for (let index = control.length - 1; index >= 0; index--) {
      control.removeAt(index);
    }

  }
  loadSubCat() {
     const catId = +this.subCategoryFormGroup.get('categoryId').value;
    this.categoryService.getSubCategories(catId).subscribe(res => this.subCategories = res);
  }
  carry() {
    const controls = this.subCategoryFormGroup.get('subCategory') as FormArray;
    const res = controls.controls;
    for (let index = 0; index < res.length; index++) {
      if(res[index].value['categoryTypeEnum'] == CategoryTypeEnum.ThirdSubCategory) {
        this.isThirdCatSelected = true;

      } else {
        this.isThirdCatSelected = false;
      }
    }

  }

}
