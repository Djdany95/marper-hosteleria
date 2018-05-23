import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Output() goto: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  gotoPortada() {
    this.goto.emit('portada');
  }

  gotoAbout() {
    this.goto.emit('about');
  }
}
