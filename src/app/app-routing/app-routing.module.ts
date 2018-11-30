import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../component/product/product-list/product-list.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { ProductDetailComponent } from '../component/product/product-detail/product-detail.component';
import { ViewCartComponent } from '../component/view-cart/view-cart.component';



const routes: Routes = [
  {path: 'product/cart', component: ViewCartComponent },
  {path: 'product/:name', component: ProductListComponent },
  {path: 'product/:name/:id', component: ProductDetailComponent },
  {path: '', redirectTo: 'product', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
