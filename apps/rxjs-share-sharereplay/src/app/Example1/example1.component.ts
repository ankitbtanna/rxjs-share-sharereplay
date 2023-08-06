import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, map, share, startWith } from 'rxjs';
import { UsersRespose } from '../app.model';

@Component({
  selector: 'rxjs-share-sharereplay-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component {
  users$: Observable<UsersRespose> = this.appService.getUsers().pipe(
    startWith({users: []}),
    share()
  );

  count$: Observable<number> = this.users$.pipe(
    map((users) => users.users.length)
  );

  averageAge$: Observable<number> = this.users$.pipe(
    map((users) => {
      const total = users.users.reduce((acc, user) => acc + user.age, 0);
      return total / users.users.length;
    })
  );
  
  constructor(private appService: AppService) {}
}
