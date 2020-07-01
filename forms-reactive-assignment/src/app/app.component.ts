import { CustomValidators } from "./custom-validators";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  invalidProjectName = "Test";
  invalidProjectNameTwo = "Test2";

  ngOnInit() {
    this.userForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, this.forbiddenNames.bind(this)],
        this.forbiddenNamesAsync.bind(this)
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl("critical", Validators.required),
    });
  }

  onSubmit() {
    console.log(this.userForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === this.invalidProjectNameTwo) {
      return { invalidProjectName: true };
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      console.log("this", this);
      setTimeout(() => {
        if (this.invalidProjectName === control.value) {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
