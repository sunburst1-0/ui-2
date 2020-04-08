import { Component, OnInit } from '@angular/core';
import { Message } from 'ng-chat';
import { from, merge, Observable, Subject } from 'rxjs';
import { SendMessageEvent, User, Action, ExecuteActionEvent } from '@progress/kendo-angular-conversational-ui';
import { switchMap, map, windowCount, scan, take, tap } from 'rxjs/operators';
import {ChatService} from "../../chart.services";

@Component({
  selector: 'app-mobile-user',
  templateUrl: './mobile-user.component.html',
  styleUrls: ['./mobile-user.component.css'],
  providers: [ChatService]
})
export class MobileUserComponent implements OnInit {

  userProfile = {
    name: 'Suzan Kandappa',
    status: 1
  };
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
  public feed: Observable<Message[]>;
  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  person = [
    { name: 'A.B.C. Perera', status: 1, picUrl: 'alan.png' },
    { name: 'A.Z.D. Peter', status: 0, picUrl: 'jack.png' },
    { name: 'R. Nuvi Yen', status: 1, picUrl: 'kate.png' },
    { name: 'S.A. Yuki', status: 1, picUrl: 'lee.png' },
    { name: 'M. Imran', status: 1, picUrl: 'nick.png' }
  ];


  private local: Subject<any> = new Subject<any>();
  constructor(private svc: ChatService) {
    const hello: any = {
      author: this.bot,
      suggestedActions: [
        {
          type: 'reply',
          value: 'Neat!'
        },
        {
          type: 'reply',
          value: 'Thanks, but this is boring.'
        }
      ],
      timestamp: new Date(),
      text: 'Hello, this is a demo bot. I don`t do much, but I can count symbols!'
    };

    // Merge local and remote messages into a single stream
    this.feed = merge(
      from([hello]),
      this.local,
      this.svc.responses.pipe(
        map((response): any => ({
          author: this.bot,
          text: response
        }))
      )
    ).pipe(
      // ... and emit an array of all messages
      scan((acc: Message[], x: Message) => [...acc, x], [])
    );
  }

  ngOnInit(): void {
  }

  public sendMessage(e: any): void {
    this.local.next(e.message);

    this.local.next({
      author: this.bot,
      typing: true
    });

    this.svc.submit(e.message.text);
  }
}
