import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {}

  onSubmit() {
    const editMode = false;
    if (editMode) {
      const index = 0;
      const newIngredient: Ingredient = new Ingredient('', 0);
      this.store.dispatch(new ShoppingListActions.UpdateIngredients({ index, ingredient: newIngredient }));
    }
    this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient('Bananas', 4)));
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredients(0));
  }
}
