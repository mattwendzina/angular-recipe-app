import { Router } from "@angular/router";
import { AuthService, AuthResponseData } from "./auth.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    this.isLoading = true;
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(["/recipes"]);
      },
      (errorMessage) => {
        console.log("errorMessage ", errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    authForm.reset();
  }

  closeError() {
    this.error = null;
  }
}
