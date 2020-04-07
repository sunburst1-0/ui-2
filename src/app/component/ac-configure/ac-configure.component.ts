import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ac-configure',
  templateUrl: './ac-configure.component.html',
  styleUrls: ['./ac-configure.component.css']
})
export class AcConfigureComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    console.log("routeParams"+routeParams.uuid);
  }

}
