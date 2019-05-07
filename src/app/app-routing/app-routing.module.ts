import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../component/product/product-list/product-list.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { ProductDetailComponent } from '../component/product/product-detail/product-detail.component';
import { ViewCartComponent } from '../component/view-cart/view-cart.component';
import { ViewSubjectComponent } from '../component/view-subject/view-subject.component';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { HomeComponent } from '../component/home/home.component';
import { ProductGuard } from '../guards/products.guard';



const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'products/cart', component: ViewCartComponent },
  {path: 'products/latest', component: ProductListComponent },
  {path: 'products/top-picks', component: ProductListComponent },
  {path: 'products', component: ProductListComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'products/edit/:code', component: ProductListComponent, canActivate: [ProductGuard] },
  {path: ':name/view', component: ViewSubjectComponent, canActivate: [ProductGuard]},
  {path: 'products/:name/:id', component: ProductDetailComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
