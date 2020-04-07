import { Component, OnInit,Renderer2 } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.css']
})
export class MapEditorComponent implements OnInit {
  id:any;
  constructor(private renderer: Renderer2,private activeRoute: ActivatedRoute) { }
  tiles: Tile[] = [

    {text: 'five', cols: 2, rows: 2, color: ''},
    {text: 'six', cols: 2, rows: 2, color: ''},
    {text: 'seven', cols: 2, rows: 1, color: ''},
    {text: 'eight', cols: 2, rows: 1, color: ''},
  ];
  ngOnInit() {

    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    console.log("routeParams"+routeParams.uuid);
    this.id=routeParams.uuid;
  }

}
