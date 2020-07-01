import { ShoppingListService } from "./../shopping-list.service";
import { Ingredient } from "./../../shared/ingredient.model";

import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("form", { static: false }) shoppingListForm: NgForm;

  startedEditingSub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.startedEditingSub = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.startedEditingSub.unsubscribe();
  }

  addOrUpdateIngredient(form: NgForm) {
    const value = form.value;
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        new Ingredient(value.name, value.amount),
        this.editedItemIndex
      );
    } else {
      const newIngredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.addNewIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  clearIngredients() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  removeIngredient() {
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.editMode = false;
    this.shoppingListForm.reset();
  }
}
