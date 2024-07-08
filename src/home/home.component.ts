import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSubmit(val) {
    console.log(val);
  }

  @Input() newTitle: any;

  @Output() data = new EventEmitter();

  sendData(value) {
    this.data.emit(value);
  }
}
