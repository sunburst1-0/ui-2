import { Component, OnInit } from '@angular/core';
import { Message } from 'ng-chat';
import { from, merge, Observable, Subject } from 'rxjs';
import { SendMessageEvent, User, Action, ExecuteActionEvent } from '@progress/kendo-angular-conversational-ui';
import { switchMap, map, windowCount, scan, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-user',
  templateUrl: './mobile-user.component.html',
  styleUrls: ['./mobile-user.component.css']
})
export class MobileUserComponent implements OnInit {

  userProfile = {
    name: 'Suzan Kandappa',
    status: 1
  };
  items = [
    {
      label: 'File',
      items: [{ label: 'New', icon: 'pi pi-fw pi-plus' }, { label: 'Download', icon: 'pi pi-fw pi-download' }]
    },
    {
      label: 'Edit',
      items: [{ label: 'Add User', icon: 'pi pi-fw pi-user-plus' }, { label: 'Remove User', icon: 'pi pi-fw pi-user-minus' }]
    }
  ];
  cols = [{ field: 'country', header: 'Country' }, { field: 'companies', header: 'Companies' }];
  dataSource = [
    { id: 1, country: 'USA', company: 'Apple Inc, Microsoft' },
    { id: 2, country: 'USA', company: 'Apple Inc, Microsoft' },
    { id: 3, country: 'USA', company: 'Apple Inc, Microsoft' },
    { id: 4, country: 'USA', company: 'Apple Inc, Microsoft' },
    { id: 5, country: 'USA', company: 'Apple Inc, Microsoft' },
    { id: 6, country: 'USA', company: 'Apple Inc, Microsoft' }
  ];
  selectedItems: any;


  person = [
    { name: 'A.B.C. Perera', status: 1, picUrl: 'alan.png' },
    { name: 'A.Z.D. Peter', status: 0, picUrl: 'jack.png' },
    { name: 'R. Nuvi Yen', status: 1, picUrl: 'kate.png' },
    { name: 'S.A. Yuki', status: 1, picUrl: 'lee.png' },
    { name: 'M. Imran', status: 1, picUrl: 'nick.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
