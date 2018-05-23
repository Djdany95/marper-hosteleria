import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  portada: boolean;
  about: boolean;
  catalogo: boolean;

  ngOnInit(): void {
    this.portada = false;
    this.about = true;
    this.catalogo = false;
  }

}
