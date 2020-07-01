import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "scale(1)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "scale(2) translateX(500px)",
          borderRadius: "50px",
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "blue",
          transform: "scale(0.5) translateX(500px)",
        })
      ),
      transition("normal => highlighted", [
        animate(
          2000,
          keyframes([
            style({
              backgroundColor: "orange",
              borderRadius: "10px",
              transform: "translateX(250px)",
              offset: 0.1,
            }),
            style({
              backgroundColor: "green",
              borderRadius: "50px",
              transform: "translate(300px)",
              offset: 0.2,
            }),
            // style({
            //   backgroundColor: "green",
            //   borderRadius: "20",
            //   offset: 0.5,
            // }),
            // style({
            //   backgroundColor: "yellow",
            //   borderRadius: "30",
            //   offset: 0.4,
            // }),
            // style({ backgroundColor: "red", borderRadius: "40", offset: 0.8 }),
            // style({ backgroundColor: "red", borderRadius: "50", offset: 0.9 }),
          ])
        ),
      ]),

      // transition("highlighted => normal", animate(500)),
      // transition("shrunken <=> *", animate(500)),
    ]),
    trigger("wildState", [
      state(
        "normal",
        style({
          backgroundColor: "red",
          transform: "scale(1)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "scale(2) translateX(500px)",
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "green",
          transform: "scale(0.5) translateX(500px)",
        })
      ),
      transition("normal => highlighted", animate(500)),
      transition("highlighted => normal", animate(3000)),
      transition("shrunken <=> *", animate(1000)),
    ]),
    trigger("listOne", [
      state(
        "in",
        style({
          opacity: "1",
          transform: "scale(1)",
        })
      ),
      transition("void => *", [style({ transform: "scale(0)" }), animate(500)]),
      transition("* => void", [animate(500, style({ transform: "scale(0)" }))]),
      // transition("highlighted => normal", animate(500)),
      // transition("shrunken <=> *", animate(500)),
    ]),
    trigger("listTwo", [
      state(
        "in",
        style({
          opacity: "1",
          transform: "scale(1)",
        })
      ),
      transition("void => *", [
        animate(
          2000,
          keyframes([
            style({ transform: "translateX(-100px)", opacity: "0", offset: 0 }),
            style({ transform: "translateX(100px", opacity: "1", offset: 0.1 }),
            style({ transform: "scale(1.1)", offset: 0.9 }),
            style({ transform: "scale(1)", offset: 0.98 }),
          ])
        ),
      ]),
      transition("* => void", [animate(500, style({ transform: "scale(0)" }))]),
      // transition("highlighted => normal", animate(500)),
      // transition("shrunken <=> *", animate(500)),
    ]),
  ],
})
export class AppComponent {
  list = ["Milk", "Sugar", "Bread"];

  state = "normal";
  wildState = "normal";

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    this.state === "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");
    this.wildState === "normal"
      ? (this.wildState = "highlighted")
      : (this.wildState = "normal");
  }

  onShrink() {
    this.state === "normal"
      ? (this.state = "shrunken")
      : (this.state = "normal");
    this.wildState === "normal"
      ? (this.wildState = "shrunken")
      : (this.wildState = "normal");
  }

  onDelete(deleteItem) {
    this.list = this.list.filter((listItem) => listItem !== deleteItem);
  }
}
