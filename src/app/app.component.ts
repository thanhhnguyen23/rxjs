import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

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
    numbers$.subscribe(x => console.log(x));

  }
  ngOnDestry(){
  }
}
