import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { MerchantService } from 'src/app/services/merchant.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BrandsService } from 'src/app/services/brand.service';


@Component({
  selector: 'app-create-merchant-form',
  templateUrl: './create-merchant-form.component.html',
  styleUrls: ['./create-merchant-form.component.css']
})
export class CreateMerchantFormComponent implements OnInit {

  merchantFormGroup: FormGroup;
  modalRef: BsModalRef;
  @ViewChild('templateMerchant') templateMerchant: TemplateRef<any>;


  constructor(private modalService: BsModalService, private merchantService: MerchantService, private alertify: AlertifyService,
     private brandService: BrandsService) { }

  ngOnInit() {
    this.brandService.currentMerchantModalObservable().subscribe(res => {
      this.openModal(this.templateMerchant);
    });
    this.initialiseMerchantForm();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseMerchantForm(): any {
    this.merchantFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }

  submitMerchantForm() {
    if (this.merchantFormGroup.invalid) {
      return;
    }
    const {name} = this.merchantFormGroup.value;
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
  }

}
