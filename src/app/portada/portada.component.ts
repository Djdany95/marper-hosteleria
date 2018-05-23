import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  @Output() goto = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  gotoCatalogo() {
    this.goto.emit('catalogo');
  }
}
