import { SharedModule } from "./../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AuthComponent],
  imports: [FormsModule, AuthRoutingModule, FormsModule, SharedModule],
})
export class AuthModule {}
