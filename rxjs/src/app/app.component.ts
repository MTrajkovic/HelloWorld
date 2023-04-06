import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
  interval,
  Observable,
  Subscriber,
  fromEvent,
  debounceTime,
  combineLatest,
  forkJoin,
  map,
  Subscription,
  from,
  catchError,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  timer$?: number;
  Subscription?: Subscription;

  input1$?: Observable<Event>;
  input2$?: Observable<Event>;
  result$?: Observable<[string, string]>;
  sum$?: Observable<number>;

  currentTime$: Observable<Date> = new Observable<Date>((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  searchInput$ = new Observable((observer: Subscriber<string>) => {
    observer.next(
      (document.getElementById('searchInput')! as HTMLInputElement).value
    );
  });

  ngOnInit(): void {
    interval(1000).subscribe(() => console.log(new Date()));

    fromEvent(document.getElementById('searchInput')!, 'keyup')
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.searchInput$.subscribe((data) => {
          console.log(data);
        });
      });

    const input1 = document.getElementById('input1') as HTMLInputElement | null;

    const input2 = document.getElementById('input2') as HTMLInputElement | null;

    const input1$ = fromEvent(input1!, 'keyup');
    const input2$ = fromEvent(input2!, 'keyup');

    const result$ = combineLatest([input1$, input2$]).subscribe(() => {
      console.log(`${input1?.value}${input2?.value}`);
    });

    const inputSum1 = document.getElementById(
      'inputSum1'
    ) as HTMLInputElement | null;

    const inputSum2 = document.getElementById(
      'inputSum1'
    ) as HTMLInputElement | null;

    //const inputSum1$ = fromEvent(inputSum1!, 'keyup');
    //const inputSum2$ = fromEvent(inputSum2!, 'keyup');

    //this.sum$ = combineLatest([inputSum1$, inputSum2$]).pipe(
    // map(([inputSum1, inputSum2]) => inputSum1 + inputSum2)
    //);
    //this.sum$.subscribe((sum) => console.log(sum));

    const data1$ = ajax('https://jsonplaceholder.typicode.com/users');
    const data2$ = ajax('https://jsonplaceholder.typicode.com/albums');

    forkJoin([data1$, data2$]).subscribe((results) => {
      console.log(results);
    });
  }

  Start() {
    this.Subscription = interval(1000).subscribe((data) => {
      this.timer$ = data;
    });
  }

  Stop() {
    this.Subscription?.unsubscribe();
  }
}
