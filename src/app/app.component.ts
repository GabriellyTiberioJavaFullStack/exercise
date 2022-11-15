import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';
  i: number = 0
 
   increment() {
     this.i++
   }
 
   decrement() {
      this.i--
   }
}
