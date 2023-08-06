import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable, startWith } from 'rxjs';
import { UsersRespose } from './app.model';

@Component({
  selector: 'rxjs-share-sharereplay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RxJS: share vs shareReplay';
}
