import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Output() goto = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  gotoCatalogo() {
    this.goto.emit('catalogo');
  }
}
