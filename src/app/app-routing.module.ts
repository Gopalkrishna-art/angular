import { ListEditComponent } from './list-edit/list-edit.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: GroceryListComponent

  },
  {
    path: "list/edit/:id",
    component: ListEditComponent

  },
  {
    path: "list/add/:id",
    component: ListEditComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
