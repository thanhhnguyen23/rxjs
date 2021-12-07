import { Component } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  // subjects are both observers and observables
  mySubject$!: BehaviorSubject<any>;

  ngOnInit(){
    // BehaviorSubjects requires a starting value
    this.mySubject$ = new BehaviorSubject(1000);

    this.mySubject$.subscribe(x => console.log('1st subscriber', x));

    this.mySubject$.next(1);
    this.mySubject$.next(2);

    // this.mySubject$.unsubscribe();

    this.mySubject$.subscribe(x => console.log('2nd subscriber', x));
    this.mySubject$.next(3);
  }
  ngOnDestry(){
    this.mySubject$.unsubscribe();
  }
}
