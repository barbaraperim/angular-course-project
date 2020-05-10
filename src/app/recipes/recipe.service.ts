import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListAction from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable
export class RecipeService {
  constructor(private store: Store<fromShoppingList.AppState>) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListAction.AddIngredients(ingredients));
  }
}
