import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {
  destacados: Array<Producto>;

  modal: boolean;
  modalNombre: string;
  modalRef: string;
  modalImage: string;

  constructor(private productoService: ProductosService) {}

  ngOnInit() {
    this.modal = false;
    this.destacados = new Array<Producto>();
    this.getDestacados();
  }

  getDestacados() {
    this.productoService.getDestacados().subscribe(
      response => {
        this.destacados = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  modalLightbox(nombre: string, ref: string, image: string) {
    this.modalNombre = nombre;
    this.modalRef = ref;
    this.modalImage = image;
    this.modal = true;
  }
}
