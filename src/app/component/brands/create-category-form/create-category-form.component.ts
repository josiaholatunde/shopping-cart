import { Component, OnInit, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

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


  constructor(private modalService: BsModalService,private brandService: BrandsService, private categoryService: CategoryService,
    private fb: FormBuilder,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.brandService.currentCategoryModalObservable().subscribe(res => {
      this.openModal(this.templateCategory);
    });
    this.initialiseCategoryForm();

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
    this.modalRef = this.modalService.show(template);
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

  }

}
