import { Component } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { UsersRespose } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'rxjs-share-sharereplay-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component {
  users$: Observable<UsersRespose> = this.appService.getUsers().pipe(
    startWith({users: []})
  );
  
  constructor(private appService: AppService) {}
}
