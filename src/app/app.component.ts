import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';
  // example of simple observable
  observable$!: Observable<any>;

  ngOnInit(){
    this.observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.observable$.subscribe(
      (value: any) => console.log(value),
      err => {},
      () => console.log('this is the end =(')
    );
  }
}
