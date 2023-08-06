import { Component } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { UsersRespose } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'rxjs-share-sharereplay-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.scss'],
})
export class Example4Component {
  users$: Observable<UsersRespose> = this.appService.getUsers().pipe(
    startWith({users: []})
  );
  
  constructor(private appService: AppService) {}
}
