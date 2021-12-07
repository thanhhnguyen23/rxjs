import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  // subjects are both observers and observables
  mySubject$!: Subject<any>;

  ngOnInit(){
    this.mySubject$ = new Subject();

    this.mySubject$.subscribe(x => console.log('1st subscriber', x));

    this.mySubject$.next(1);
    this.mySubject$.next(2);

    // observables are not reusable after invoking complete()
    // this.mySubject$.complete();

    // unsubscribe() will be a better alternative because this method throws an error
    // as opposed to complete(), where there are no visible error messages
    this.mySubject$.unsubscribe();


    this.mySubject$.subscribe(x => console.log('2nd subscriber', x));
    this.mySubject$.next(3);
  }
  ngOnDestry(){
    this.mySubject$.unsubscribe();
  }
}
