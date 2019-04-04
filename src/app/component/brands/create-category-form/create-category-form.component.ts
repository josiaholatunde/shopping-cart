import { Component, OnInit, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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


  constructor(private modalService: BsModalService,private brandService: BrandsService, private categoryService: CategoryService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.brandService.currentCategoryModalObservable().subscribe(res => {
      this.openModal(this.templateCategory);
    });
    this.initialiseCategoryForm();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseCategoryForm(): any {
    this.categoryFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }
  submitCategoryForm() {
    if (this.categoryFormGroup.invalid) {
      return;
    }
    const {name} = this.categoryFormGroup.value;
    const categoryToCreateDto = {
      name
    };
    this.categoryService.createCategory(categoryToCreateDto).subscribe(res => {
      this.alertify.success('Successfully created brand');
    }, err => this.alertify.error(err),
    () => {
      this.categoryFormGroup.reset();
      this.modalRef.hide();
    });

  }

}
