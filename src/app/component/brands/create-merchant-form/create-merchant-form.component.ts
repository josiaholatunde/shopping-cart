import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MerchantService } from 'src/app/services/merchant.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BrandsService } from 'src/app/services/brand.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormMode } from 'src/app/models/FormMode';
import { Merchant } from 'src/app/models/merchant';


@Component({
  selector: 'app-create-merchant-form',
  templateUrl: './create-merchant-form.component.html',
  styleUrls: ['./create-merchant-form.component.css']
})
export class CreateMerchantFormComponent implements OnInit {

  merchantFormGroup: FormGroup;
  modalRef: BsModalRef;
  @ViewChild('templateMerchant') templateMerchant: TemplateRef<any>;
  formMode = FormMode.create;
  merchantFromDb: Merchant;


  constructor(private modalService: BsModalService, private merchantService: MerchantService, private router: Router,
    private alertify: AlertifyService, private route: ActivatedRoute,
     private brandService: BrandsService) { }

  ngOnInit() {
    this.initialiseMerchantForm();
    this.brandService.currentMerchantModalObservable().subscribe(res => {
      this.route.queryParamMap.subscribe((param: Params) => {
        if (param.params['id']) {
          this.formMode = FormMode.edit;
          this.merchantService.getMerchant(+param.params['id']).subscribe((merchant: Merchant) => {
            this.merchantFromDb = merchant;
            const {id, name} = merchant;
            this.merchantFormGroup.setValue({
              name
            });
          });
        } else {
          this.formMode = FormMode.create;
        }
      });
      this.openModal(this.templateMerchant);
    });

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseMerchantForm(): any {
    this.merchantFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }
  closeModal() {
    if (this.merchantFormGroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.merchantFormGroup.reset();
        this.modalRef.hide();
      });
    }
    this.modalRef.hide();
  }

  submitMerchantForm() {
    if (this.merchantFormGroup.invalid) {
      return;
    }
    const {name} = this.merchantFormGroup.value;
    if (this.formMode === FormMode.create) {
      const merchantToCreateDto = {
        name
      };
      this.merchantService.createMerchant(merchantToCreateDto).subscribe(res => {
        this.alertify.success('Successfully created Merchant');
      }, err => this.alertify.error(err),
      () => {
        this.merchantFormGroup.reset();
        this.modalRef.hide();
      });
    } else {
      const merchantToEditDto = {
        id: this.merchantFromDb.id,
        name
      };
      this.merchantService.editMerchant(merchantToEditDto).subscribe(res => {
        this.alertify.success('Successfully edited Merchant');
      }, err => this.alertify.error(err),
      () => {
        this.merchantFormGroup.reset();
        this.modalRef.hide();
        this.router.navigate(['categories/view'], {queryParams: {id: this.merchantFromDb.id} });
      });
    }

  }

}
