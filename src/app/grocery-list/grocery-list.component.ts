import { GroceryListService } from './../services/grocery-list.service';
import { Component, OnInit } from '@angular/core';
import { GroceryList } from './model/groceryList.model';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  groceryList: GroceryList[] = []
  constructor(private groceryListservice: GroceryListService) { }

  ngOnInit(): void {
    this.groceryList = this.groceryListservice.onGet()
  }
  onDelete(id: number) {
    this.groceryListservice.onDelete(id)
  }
}
