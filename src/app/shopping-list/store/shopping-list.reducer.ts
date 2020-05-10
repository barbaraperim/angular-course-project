import { Ingredient } from '../../shared/ingredient.model';

// mostly a convention of naming but could be done otherwise
// it groups all imports in the file as ShoppingListActions
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 3)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      // state.ingredients.push(newIngredient) WRONG! STATE MUST BE IMMUTABLE
      // spread operator: shallow copy
      return {
        //we could ommit state here because it has only one property
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENTS:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient, //this line could be commented if you are rewritting ALL propertiees of ingredient
        ...action.payload.ingredient,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case ShoppingListActions.DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter((i, index) => {
          return index !== action.payload;
        }),
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredient: { ...state.ingredients[action.payload] },
        editedIngredientIndex: action.payload,
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
