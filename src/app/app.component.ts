import { Component } from '@angular/core';
import { of, interval } from 'rxjs';
import { map, take, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit(){
    // observerable #1
    const letters$ = of('a', 'b', 'c', 'd', 'e', 'f');
    // observerable #2
    const numbers$ = interval(1000).pipe(take(10));

    const results = letters$.pipe(
      mergeMap(x => numbers$
        .pipe(
          map(i => x + i)))
    );

    // output results
    results.subscribe(x => console.log(x));

  }

  ngOnDestry(){
  }
}
