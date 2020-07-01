import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "Lasagne",
  //     "Italian classic",
  //     "https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
  //     [new Ingredient("Tinned tomatoes", 2), new Ingredient("Cheese", 1)]
  //   ),
  //   new Recipe(
  //     "Paella",
  //     "Spanish classic",
  //     "https://cdn.pixabay.com/photo/2016/01/29/14/02/paella-1168003_1280.jpg",
  //     [new Ingredient("Risotto Rice", 1), new Ingredient("Chorizo", 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    console.log(this.recipes);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
