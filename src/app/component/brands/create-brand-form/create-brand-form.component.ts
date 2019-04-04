import { Category } from './../../../models/category';
import { Component, OnInit, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-create-brand-form',
  templateUrl: './create-brand-form.component.html',
  styleUrls: ['./create-brand-form.component.css']
})
export class CreateBrandFormComponent implements OnInit {


  @Input() shouldShowModal: boolean;
  @Input() categories: Category;
  @ViewChild('template') template: TemplateRef<any>;
  modalRef: BsModalRef;
  brandFormGroup: FormGroup;


  constructor(private modalService: BsModalService, private brandService: BrandsService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.brandService.currentBrandModalObservable().subscribe(res => {
      this.openModal(this.template);
    });
    this.initialiseBrandForm();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseBrandForm(): any {
    this.brandFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]}),
      categoryId: new FormControl(null, {validators: [Validators.required]}),
    });
  }
  submitBrandForm() {
    if (this.brandFormGroup.invalid) {
      return;
    }
    const {name, categoryId} = this.brandFormGroup.value;
    const brandToCreateDto = {
      name,
      categoryId
    };
    this.brandService.createBrand(brandToCreateDto).subscribe(res => {
      this.alertify.success('Successfully created brand');
    }, err => this.alertify.error(err),
    () => {
      this.modalRef.hide();
      this.brandFormGroup.reset();
    });

  }
}

