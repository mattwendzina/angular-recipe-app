import { Store } from "@ngrx/store";
import { AuthService } from "./auth/auth.service";
import { Component, OnInit } from "@angular/core";
import * as AuthAction from "./auth/store/auth.actions";
import * as fromAppState from "./store/app.reducer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular8Course";

  constructor(private store: Store<fromAppState.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AuthAction.AutoLogin());
  }
}
