import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  portada: boolean;
  about: boolean;
  catalogo: boolean;
  admin: boolean;

  ngOnInit(): void {
    this.portada = true;
    this.about = false;
    this.catalogo = false;
    this.admin = false;
  }

  goto(where: string) {
    if (where === 'portada') {
      this.portada = true;
      this.about = false;
      this.catalogo = false;
      this.admin = false;
    } else if (where === 'catalogo') {
      this.portada = false;
      this.about = false;
      this.catalogo = true;
      this.admin = false;
    } else if (where === 'about') {
      this.portada = false;
      this.about = true;
      this.catalogo = false;
      this.admin = false;
    } else if (where === 'admin') {
      this.portada = false;
      this.about = false;
      this.catalogo = false;
      this.admin = true;
    }
  }
}
