import { Component } from '@angular/core';
import { interval, pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  ngOnInit(){
    // emiting values every second and take first 5 values
    const numbers$ = interval(1000).pipe(take(5));

    numbers$
      // transforming each value by multiplying by 10
      .pipe(map(x => x * 10))
      .subscribe(x => console.log(x));
  }
  ngOnDestry(){
  }
}
