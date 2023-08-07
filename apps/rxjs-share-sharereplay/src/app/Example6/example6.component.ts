import { Component, OnInit } from '@angular/core';
import { interval, tap, take, shareReplay, map } from 'rxjs';

@Component({
  selector: 'rxjs-share-sharereplay-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.scss'],
})
export class Example6Component implements OnInit {
  flag = true;

  readonly count$ = interval(1000).pipe(
    tap((c) => console.log('count', c)),
    take(7),
    shareReplay({ bufferSize: 1, refCount: true }) // 👈 line: 15
  );

  readonly count1$ = this.count$.pipe(
    take(3),
    map((c) => `count1: ${c}`)
  );
  readonly count2$ = this.count$.pipe(
    take(3),
    map((c) => `count2: ${c}`)
  );

  ngOnInit(): void {
    setTimeout(() => {
      this.flag = false;
    }, 5500);
  }
}
