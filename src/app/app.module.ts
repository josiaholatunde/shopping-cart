import { MerchantService } from './services/merchant.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { JwtModule } from '@auth0/angular-jwt';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DialogModule} from 'primeng/dialog';
import { AppComponent } from './app.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NavbarDetailComponent } from './component/navbar/navbar-detail/navbar-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ComponentComponent } from './component/component.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';

import { ViewCartComponent } from './component/view-cart/view-cart.component';
import { BrandsService } from './services/brand.service';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { FooterComponent } from './component/footer/footer.component';
import { AlertifyService } from './services/alertify.service';
import { CreateBrandFormComponent } from './component/brands/create-brand-form/create-brand-form.component';
import { CreateMerchantFormComponent } from './component/brands/create-merchant-form/create-merchant-form.component';
import { CreateProductFormComponent } from './component/brands/create-product-form/create-product-form.component';
import { CreateCategoryFormComponent } from './component/brands/create-category-form/create-category-form.component';
import { CreateStoreFormComponent } from './component/brands/create-store-form/create-store-form.component';
import { AssignBrandCategoryFormComponent } from './component/assign-brand-category-form/assign-brand-category-form.component';
import { SubCategoryFormComponent } from './component/sub-category-form/sub-category-form.component';
import { ViewSubjectComponent } from './component/view-subject/view-subject.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorInterceptors } from './services/error-interceptor.service';
import { HomeComponent } from './component/home/home.component';
import { SalesFormComponent } from './component/sales-form/sales-form.component';
import { ProductGuard } from './guards/products.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    NavbarComponent,
    NavbarDetailComponent,
    NotFoundComponent,
    ComponentComponent,
    ProductDetailComponent,
    ViewCartComponent,
    FooterComponent,
    CreateBrandFormComponent,
    CreateMerchantFormComponent,
    CreateProductFormComponent,
    CreateCategoryFormComponent,
    CreateStoreFormComponent,
    AssignBrandCategoryFormComponent,
    SubCategoryFormComponent,
    ViewSubjectComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SalesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })


  ],
  providers: [
    BrandsService,
    CategoryService,
    AlertifyService,
    MerchantService,
    ProductService,
    ErrorInterceptors,
    ProductGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
