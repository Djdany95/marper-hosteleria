import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  destacados: Producto[];

  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.getDestacados();
  }

  getDestacados() {
    this.productoService.getDestacados().subscribe(
      response => {
        this.destacados = response.data;
      },
      error => {
        console.log(error)
      }
    );
  }

}
