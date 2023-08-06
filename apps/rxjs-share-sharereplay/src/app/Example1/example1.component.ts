import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, startWith } from 'rxjs';
import { UsersRespose } from '../app.model';

@Component({
  selector: 'rxjs-share-sharereplay-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component {
  users$: Observable<UsersRespose> = this.appService.getUsers().pipe(
    startWith({users: []})
  );
  
  constructor(private appService: AppService) {}
}
