import { Component } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { UsersRespose } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'rxjs-share-sharereplay-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component {
  users$: Observable<UsersRespose> = this.appService.getUsers().pipe(
    startWith({users: []})
  );
  
  constructor(private appService: AppService) {}
}
