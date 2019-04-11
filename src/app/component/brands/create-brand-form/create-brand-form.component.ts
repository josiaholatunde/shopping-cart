import { Category } from './../../../models/category';
import { Component, OnInit, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormMode } from 'src/app/models/FormMode';
import { Brand } from 'src/app/models/brand';

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
  formMode = FormMode.create;
  brandFromDb: Brand;


  constructor(private modalService: BsModalService, private brandService: BrandsService, private route: ActivatedRoute,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.initialiseBrandForm();
    this.brandService.currentBrandModalObservable().subscribe(res => {
      this.route.queryParamMap.subscribe((param: Params) => {
        if (param.params['id']) {
          this.formMode = FormMode.edit;
          this.brandService.getBrand(+param.params['id']).subscribe((brand: Brand) => {
            this.brandFromDb = brand;
            const {id, name} = brand;
            this.brandFormGroup.setValue({
              name
            });
          });
        } else {
          this.formMode = FormMode.create;
        }
      });
      this.openModal(this.template);
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseBrandForm(): any {
    this.brandFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required]})
    });
  }
  closeModal() {
    if (this.brandFormGroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.brandFormGroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
  }
  submitBrandForm() {
    if (this.brandFormGroup.invalid) {
      return;
    }
    const {name} = this.brandFormGroup.value;
    if (this.formMode === FormMode.create) {
      const brandToCreateDto = {
        name
      };
      this.brandService.createBrand(brandToCreateDto).subscribe(res => {
        this.alertify.success('Successfully created brand');
      }, err => this.alertify.error(err),
      () => {
        this.modalRef.hide();
        this.brandFormGroup.reset();
      });
    } else {
      const brandToEditDto = {
        id: this.brandFromDb.id,
        name
      };
      this.brandService.editBrand(brandToEditDto).subscribe(res => {
        this.alertify.success('Successfully edited brand');
      }, err => this.alertify.error(err),
      () => {
        this.modalRef.hide();
        this.brandFormGroup.reset();
      });
    }
  }
}

