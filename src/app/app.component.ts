import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit(){
    // emiting values every second and take first 5 values
    const numbers$ = interval(1000).pipe(take(10));

    numbers$
      // filter useage: only odd numbers
      .pipe(filter(x => x % 2 != 0))
      // multiple each value by 10
      .pipe(map(x => x * 10))
      .subscribe(x => console.log(x));
  }
  ngOnDestry(){
  }
}
