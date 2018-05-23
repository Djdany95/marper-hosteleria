import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() goto = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  gotoAdmin() {
    this.goto.emit('admin');
  }
}
