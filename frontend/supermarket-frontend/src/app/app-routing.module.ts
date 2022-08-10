import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'products'},
  { path: 'products', component: ListProductComponent, data:{ title: 'Products'}},
  { path:'create', component: AddProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
