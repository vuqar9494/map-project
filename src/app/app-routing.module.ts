import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'detail', component: ItemDetailsComponent},
  {path:'new', component: NewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
