import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../component/product/product-list/product-list.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { ProductDetailComponent } from '../component/product/product-detail/product-detail.component';
import { ViewCartComponent } from '../component/view-cart/view-cart.component';
import { ViewSubjectComponent } from '../component/view-subject/view-subject.component';



const routes: Routes = [
  {path: 'products/cart', component: ViewCartComponent },
  {path: 'products', component: ProductListComponent },
  {path: 'products/edit/:code', component: ProductListComponent },
  {path: ':name/view', component: ViewSubjectComponent },
  {path: 'products/:name/:id', component: ProductDetailComponent },
  {path: '', redirectTo: 'product', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
