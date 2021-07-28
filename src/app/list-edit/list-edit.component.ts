import { GroceryListService } from './../services/grocery-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GroceryList } from '../grocery-list/model/groceryList.model';


@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
  id: number = 1
  header: string = ''

  groceryList: GroceryList = {
    id: 0,
    item: '',
    unit: 0,
    unitprice: 0,
    totalprice: 0,
    grandtotal: 0
  }
  constructor(private router: Router, private route: ActivatedRoute, private groceryListservices: GroceryListService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.header = this.id === 0 ? 'Add Grocery Items' : 'Edit Grocery Items';
    if (this.id != 0) {
      this.groceryList = this.groceryListservices.onGetgroceryList(this.id)!;
    }
  }
  onSubmit(form: NgForm) {


    let groceryList: GroceryList = {
      id: form.value.id,
      item: form.value.item,
      unit: form.value.unit,
      unitprice: form.value.unitprice,
      totalprice: form.value.unitprice * form.value.unit,
      grandtotal: 0,
    }
    if (this.id === 0) {
      this.groceryListservices.onAdd(groceryList)

    } else {
      this.groceryListservices.onUpdate(groceryList)
    }
    this.router.navigateByUrl('');
  }

}
