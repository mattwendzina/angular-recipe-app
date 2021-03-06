import { CommonModule } from "@angular/common";
import { SharedModule } from "./../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [ShoppingListRoutingModule, FormsModule, SharedModule],
})
export class ShoppingListModule {}
