import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Tinned Tomatoes", 10),
    new Ingredient("Mature Cheddar", 2),
  ];

  constructor() {}

  getIngredient(index) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  updateIngredient(updatedIngredient: Ingredient, index: number) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
