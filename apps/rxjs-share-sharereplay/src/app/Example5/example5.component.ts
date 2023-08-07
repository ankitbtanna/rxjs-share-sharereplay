import { Component, OnInit } from '@angular/core';
import { interval, take, shareReplay, map, tap } from 'rxjs';

@Component({
  selector: 'rxjs-share-sharereplay-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.scss'],
})
export class Example5Component implements OnInit {
  flag = true;

  readonly count$ = interval(1000).pipe(
    tap((c) => console.log('count', c)),
    take(7),
    shareReplay({ bufferSize: 1, refCount: false }) // 👈 line: 15
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
