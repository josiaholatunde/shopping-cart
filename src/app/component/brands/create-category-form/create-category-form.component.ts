import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { FormMode } from 'src/app/models/FormMode';

@Component({
  selector: 'app-create-category-form',
  templateUrl: './create-category-form.component.html',
  styleUrls: ['./create-category-form.component.css']
})
export class CreateCategoryFormComponent implements OnInit {

  @Input() shouldShowModal: boolean;
  @Input() categories: Category;
  @ViewChild('templateCategory') templateCategory: TemplateRef<any>;
  modalRef: BsModalRef;
  categoryFormGroup: FormGroup;
  formMode = FormMode.create;
  subCategoryFromDb: import("c:/Users/User/Documents/ShoppingCart/ShoppingUI/shopping-cart/src/app/models/SubCategory").SubCategory[];
  categoryId: number;


  constructor(private modalService: BsModalService,private brandService: BrandsService, private categoryService: CategoryService,
    private fb: FormBuilder, private route: ActivatedRoute,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.initialiseCategoryForm();
    this.brandService.currentCategoryModalObservable().subscribe(res => {
      this.route.queryParamMap.subscribe((param: Params) => {
        if (param.params['id']) {
          this.formMode = FormMode.edit;
          this.categoryService.getCategory(+param.params['id']).subscribe((category: Category) => {
            const {id, name, subCategory} = category;
            this.categoryId = id;
            this.subCategoryFromDb = subCategory;
            const newSubCategory = [];
            for (let index = 0; index < subCategory.length; index++) {
              const cat = {
                name: subCategory[index].name
              };
              newSubCategory.push(cat);
              if (index !== 0) {
                (this.categoryFormGroup.controls['subCategory'] as FormArray).push(this.createItem());
              }
            }
            this.categoryFormGroup.setValue({
              name,
              subCategory: newSubCategory
            });
          });
        }
      });
      this.openModal(this.templateCategory);
    });

  }
  closeModal() {
    if (this.categoryFormGroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.categoryFormGroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }

  initialiseCategoryForm(): any {
    this.categoryFormGroup = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      subCategory: this.fb.array([this.createItem()])
    });
  }
  createItem(): any {
    return this.fb.group({
      name: ['', Validators.required]
    });
  }
  addNext() {
    (this.categoryFormGroup.controls['subCategory'] as FormArray).push(this.createItem());
  }
  submitCategoryForm() {
    if (this.categoryFormGroup.invalid) {
      return;
    }
    const {name, subCategory} = this.categoryFormGroup.value;
    if (this.formMode === FormMode.create) {
      const categoryToCreateDto = {
        name,
        subCategory
      };
      this.categoryService.createCategory(categoryToCreateDto).subscribe((res) => {
        this.alertify.success('Successfully created brand');
      }, err => this.alertify.error(err),
      () => {
        this.categoryFormGroup.reset();
        this.modalRef.hide();
      });
    } else {
      const newFeatures = [];
          for (let index = 0; index < this.subCategoryFromDb.length; index++) {
            const featuresO = {
              id: this.subCategoryFromDb[index].id,
              name: this.subCategoryFromDb[index].name
            };
            newFeatures.push(featuresO);
          }
      const categoryToEditDto = {
        id: this.categoryId,
        name,
        subCategory
      };
      this.categoryService.editCategory(categoryToEditDto).subscribe((res) => {
        this.alertify.success('Successfully created brand');
      }, err => this.alertify.error(err),
      () => {
        this.categoryFormGroup.reset();
        this.modalRef.hide();
      });
    }
  }

}
