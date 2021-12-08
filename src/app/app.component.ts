import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchSubject$ = new Subject<string>();
  searchString!: string;
  results$!: Observable<any>;

  constructor(private http: HttpClient){}

  ngOnInit(){

    this.results$ = this.searchSubject$
      .pipe(
        // debounceTime avoids hitting the data provider every second
        debounceTime(400))
      .pipe(
        // distinctUntilChanged is used to avoid duplicates
        distinctUntilChanged())
      .pipe(
        // tap is used for debugging
        tap(x => console.log(`tap: ${x}`)))
      .pipe(
        // switchMap is used to resets the search
        switchMap(
          async (searchString) => this.queryAPI(this.searchString)));
  }

  inputChanged($event: any){
    console.log(`input changed`, $event);
    this.searchSubject$.next($event);
  }

  queryAPI(searchString: string): void{
    console.log(`queryAPI`, searchString);
    this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
      .pipe(map(
        (result:any) => result['data']['children']));
  }

  ngOnDestroy(){
  }

}
