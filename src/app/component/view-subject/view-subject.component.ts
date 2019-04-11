import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/Subject';
import { MerchantService } from 'src/app/services/merchant.service';
import { StoreService } from 'src/app/services/store.service';
import { CategoryService } from 'src/app/services/category.service';
import { BrandsService } from 'src/app/services/brand.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.scss']
})
export class ViewSubjectComponent implements OnInit {
  subjectName = 'Brand';
  subjectList: any[];
  subjectParams: any;
  currentSubject: any;
  currentSubjectType: Subject;
  subjectEnumId: any;

  constructor(private route: ActivatedRoute, private merchantService: MerchantService, private storeService: StoreService,
    private alertify:AlertifyService,
    private categoryService: CategoryService, private brandService: BrandsService, private router: Router) { }

  ngOnInit() {
    this.getBrands();
    this.route.queryParamMap.subscribe((param: Params) => {
      if (param.params['subjectId']) {
        this.subjectName = Subject[param.params['subjectId']];
        this.subjectEnumId = param.params['subjectId'];
        if ( Subject[param.params['subjectId']] === 'Merchant') {
          this.getMerchants();
        } else if (Subject[param.params['subjectId']] === 'Store') {
            this.getStores();
        } else if (Subject[param.params['subjectId']] === 'Category') {
          this.getCategories();
        }
      }
    });
  }
  getMerchants() {
    this.merchantService.getMerchants().subscribe(res => {
      this.currentSubjectType = Subject.Merchant;
      this.subjectList = res;
    });
  }
  getStores() {
    this.storeService.getStores().subscribe(res => {
      this.currentSubjectType = Subject.Store;
      this.subjectList = res;
    });
  }
  getCategories() {
    this.categoryService.getCategoriesWithoutPage().subscribe(res => {
      this.currentSubjectType = Subject.Category;
      this.subjectList = res;
    });
  }
  getBrands() {
    this.brandService.getAllBrands().subscribe(res => {
      this.subjectList = res;
      this.currentSubjectType = Subject.Brand;
    });
  }
  populateTableWithSubject() {
    this.currentSubject = this.subjectList.find(s => s.id == this.subjectParams);
  }
  openUpdateModal() {
    if (this.currentSubjectType === Subject.Merchant) {
      this.brandService.updateMerchantModalValue(true);
    } else if (this.currentSubjectType === Subject.Category) {
      this.brandService.updateCategoryModalValue(true);
    } else if (this.currentSubjectType === Subject.Store) {
      this.brandService.updateStoreModalValue(true);
    } else if (this.currentSubjectType === Subject.SubCategory) {
      this.brandService.updateSubCategoryModalValue(true);
    } else if (this.currentSubjectType === Subject.Brand) {
      this.brandService.updateBrandModalValue(true);
    }
    this.router.navigate(['categories/view'], {queryParams: {id: +this.subjectParams, categoryId: this.subjectEnumId}});
  }
  deleteSub() {
    if (this.currentSubjectType === Subject.Merchant) {
      this.alertify.confirm('Are you sure you want to delete this Merchant? ', () => {
        this.merchantService.deleteMerchant(this.currentSubject.id).subscribe(() => {
          this.alertify.success('Successfully deleted Merchant');
        }, err => this.alertify.error(err.error), () => {
          this.currentSubject = null;
        });
      });
    } else if (this.currentSubjectType === Subject.Category) {
      this.alertify.confirm('Are you sure you want to delete this Category? ', () => {
        this.categoryService.deleteCategory(this.currentSubject.id).subscribe(() => {
          this.alertify.success('Successfully deleted Category');
        }, err => this.alertify.error(err.error), () => {
          this.currentSubject = null;
        });
      });
    } else if (this.currentSubjectType === Subject.Store) {
      this.alertify.confirm('Are you sure you want to delete this Store? ', () => {
        this.storeService.deleteStore(this.currentSubject.id).subscribe(() => {
          this.alertify.success('Successfully deleted Store');
        }, err => this.alertify.error(err.error), () => {
          this.currentSubject = null;
        });
      });
    } else if (this.currentSubjectType === Subject.Brand) {
      this.alertify.confirm('Are you sure you want to delete this Brand? ', () => {
        this.brandService.deleteBrand(this.currentSubject.id).subscribe(() => {
          this.alertify.success('Successfully deleted Brand');
          this.getBrands();
        }, err => this.alertify.error(err.error), () => {
          this.currentSubject = null;
        });
      });
    }
  }

}
