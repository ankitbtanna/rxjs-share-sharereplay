import { Component } from '@angular/core';
import { Observable, map, shareReplay, startWith } from 'rxjs';
import { UsersRespose } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'rxjs-share-sharereplay-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component {
  users$: Observable<UsersRespose> = this.appService.getUsers().pipe(
    startWith({users: []}),
    shareReplay({refCount: true, bufferSize: 1})
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
