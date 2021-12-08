import { Component, } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    // simple observable with a click event
    fromEvent(document, 'click').subscribe(x => console.log(x))
  }

  ngOnDestry(){
  }
}
