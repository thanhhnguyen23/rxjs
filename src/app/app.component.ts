import { Component, } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchSubject$ = new Subject<string>();
  searchString!: string;

  ngOnInit(){

    this.searchSubject$
      .pipe(
        debounceTime(400)
      ).subscribe( x => console.log(`debounced: ${x}`));

  }

  inputChanged($event: any){
    console.log(`input changed`, $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy(){
  }

}
