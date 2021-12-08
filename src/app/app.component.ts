import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template:`
    <button #counterBtn type="button">Click here</button>
    <h1>Counter: {{ counter }}</h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 'counterBtn' is binded to #counterBtn in html to capture MouseEvent
  @ViewChild('counterBtn', { static: true, read: ElementRef}) counterBtnRef!: ElementRef;

  counter: number = 0;

  ngOnInit(){
    // listening for button click events inside the DOM
    fromEvent(this.counterBtnRef.nativeElement, 'click')
    // switchmap() will reset the current stream and starts a new MouseEvent stream when clicked
    .pipe(switchMap((_event) => {
      // outputs the event type, in this case it's MouseEvent
      console.log(`new event: ${_event}`)
      // inner observable emitting values
      return interval(1000)
    }))
    .subscribe(data => {
      // outputs the data stream to console
      console.log(`data= ${data}`)
      // saving counter to view layer
      this.counter = data;
    });

  }

  ngOnDestry(){
  }
}
