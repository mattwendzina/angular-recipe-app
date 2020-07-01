import { AuthService } from "./auth/auth.service";
import { Store } from "@ngrx/store";
import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import * as AuthAction from "./auth/store/auth.actions";
import * as fromAppState from "./store/app.reducer";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular8Course";

  constructor(
    private store: Store<fromAppState.AppState>,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthAction.AutoLogin());
    }
    console.log("Hello from AppComponent ngOnInit!");
  }
}
