import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  getData(e) {
    console.log(e);
  }

  title: string = 'Welcome to angular';
}
