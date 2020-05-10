import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Observable<{ ingredients: Ingredient[] }>;

  //inject the store with an object EQUAL as the state in shoppingList
  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {
    // select slices the store in the piece we need and returns an observable
    this.ingredients = this.store.select('shoppingList');
  }
}
