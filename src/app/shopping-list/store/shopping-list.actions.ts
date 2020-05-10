import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

// WE USE THIS TO PREVENT TYPOS
// IDENTIFIER WITH SAME NAME AS CONST WHICH SHOULD EXPLAIN ACTION PURPOSE
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredient implements Action {
  // Action is an interface to ensure the property type

  readonly type = ADD_INGREDIENT;

  // this could have another name not necessarily payload
  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredients implements Action {
  readonly type = UPDATE_INGREDIENTS;

  constructor(public payload: { index: number; ingredient: Ingredient }) {}
}

export class DeleteIngredients implements Action {
  readonly type = DELETE_INGREDIENTS;

  constructor(public payload: number) {}
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}
export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredients | DeleteIngredients | StartEdit | StopEdit;
