import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  id: any;
  navigator: any[] = [];
  constructor(
    private renderer: Renderer2,
    private activeRoute: ActivatedRoute
  ) {}
  tiles: Tile[] = [
    { text: "One", cols: 1, rows: 1, color: "" },
    { text: "Two", cols: 1, rows: 1, color: "" },
    { text: "Three", cols: 1, rows: 1, color: "" },
    { text: "four", cols: 1, rows: 1, color: "" },
    { text: "five", cols: 2, rows: 2, color: "" },
    { text: "six", cols: 2, rows: 2, color: "" },
    { text: "seven", cols: 2, rows: 1, color: "" },
    { text: "eight", cols: 2, rows: 1, color: "" }
  ];
  ngOnInit() {
    // const parent: HTMLElement = document.getElementById('first');
    //     const child = parent.children[0];
    //     this.renderer.removeChild;

    // this.refresh();
    // location.reload();
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    console.log("routeParams" + routeParams.uuid);
    this.id = routeParams.uuid;
    this.navigate("0");
  }
  refresh(): void {
    window.location.reload();
  }

  navigate(a: String) {
    this.navigator = [];
    this.navigator.push(a);
    console.log("navigate" + a);
  }

  navigation() {
    console.log("navigate");
  }
}
