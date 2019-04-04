import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-create-store-form',
  templateUrl: './create-store-form.component.html',
  styleUrls: ['./create-store-form.component.css']
})
export class CreateStoreFormComponent implements OnInit {

  @Input() shouldShowModal: boolean;
  @Input() categories: Category;
  @ViewChild('templateStore') templateStore: TemplateRef<any>;
  modalRef: BsModalRef;
  storeFormGroup: FormGroup;


  constructor(private modalService: BsModalService,private brandService: BrandsService, private storeService: StoreService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.brandService.currentStoreModalObservable().subscribe(res => {
      this.openModal(this.templateStore);
    });
    this.initialiseCategoryForm();

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  initialiseCategoryForm(): any {
    this.storeFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
    });
  }
  submitStoreForm() {
    if (this.storeFormGroup.invalid) {
      return;
    }
    const {name} = this.storeFormGroup.value;
    const storeToCreateDto = {
      name
    };
    this.storeService.createStore(storeToCreateDto).subscribe(res => {
      this.alertify.success('Successfully created brand');
    }, err => this.alertify.error(err),
    () => {
      this.storeFormGroup.reset();
      this.modalRef.hide();
    });

  }

}
