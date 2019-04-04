import { MerchantService } from './services/merchant.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DialogModule} from 'primeng/dialog';
import { AppComponent } from './app.component';
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
    CreateStoreFormComponent
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
    ModalModule.forRoot()


  ],
  providers: [
    BrandsService,
    CategoryService,
    AlertifyService,
    MerchantService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
