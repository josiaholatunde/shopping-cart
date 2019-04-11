import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormMode } from 'src/app/models/FormMode';
import { Store } from 'src/app/models/store';

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
  formMode = FormMode.create;
  storeFromDb: Store;


  constructor(private modalService: BsModalService, private brandService: BrandsService, private router: Router,
    private route: ActivatedRoute , private storeService: StoreService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.initialiseCategoryForm();
    this.brandService.currentStoreModalObservable().subscribe(res => {
      this.route.queryParamMap.subscribe((param: Params) => {
        if (param.params['id']) {
          this.formMode = FormMode.edit;
          this.storeService.getStore(+param.params['id']).subscribe((store: Store) => {
            this.storeFromDb = store;
            const {id, name, location} = store;
            this.storeFormGroup.setValue({
              name,
              location
            });
          });
        } else {
          this.formMode = FormMode.create;
        }
      this.openModal(this.templateStore);
    });

  });
}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeModal() {
    if (this.storeFormGroup.dirty) {
      this.alertify.confirm('Are you sure you want to close this modal, Information not saved would be lost? ', () => {
        this.storeFormGroup.reset();
        this.modalRef.hide();
      });
    }
  }

  initialiseCategoryForm(): any {
    this.storeFormGroup = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      location: new FormControl(null, {validators: [Validators.required]}),
    });
  }
  submitStoreForm() {
    if (this.storeFormGroup.invalid) {
      return;
    }
    const {name, location} = this.storeFormGroup.value;
    if (this.formMode === FormMode.create) {
      const storeToCreateDto = {
        name,
        location
      };
      this.storeService.createStore(storeToCreateDto).subscribe(res => {
        this.alertify.success('Successfully created brand');
      }, err => this.alertify.error(err),
      () => {
        this.storeFormGroup.reset();
        this.modalRef.hide();
      });
    } else {
      const storeToEditDto = {
        id: this.storeFromDb.id,
        name,
        location
      };
      this.storeService.editStore(storeToEditDto).subscribe(res => {
        this.alertify.success('Successfully edited Store');
      }, err => this.alertify.error(err),
      () => {
        this.storeFormGroup.reset();
        this.modalRef.hide();
        this.router.navigate(['categories/view'], {queryParams: {id: this.storeFromDb.id} });

      });
    }
  }

}
