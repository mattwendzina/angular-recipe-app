import {
  Directive,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "lightblue";

  @HostBinding("style.backgroundColor") backgroundColor: string = this
    .defaultColor;
  @HostBinding("style.transition") transition;

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.transition = "500ms";
  }
  @HostListener("mouseleave") mouseExit(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    this.transition = "500ms";
  }
}
