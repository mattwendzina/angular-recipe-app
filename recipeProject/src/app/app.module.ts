import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core.module";
import { SharedModule } from "./shared/shared.module";
import { RecipesModule } from "./recipes/recipes.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { BasicHighlightDirective } from "./basicHighlight/basic-highlight.directive";
import { BetterHighlightDirective } from "./betterHighlight/better-highlight.directive";
import { UnlessDirective } from "./unless.directive";

import { ShoppingListModule } from "./shopping-list/shopping-list.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
