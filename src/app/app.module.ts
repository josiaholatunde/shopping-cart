import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
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
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
