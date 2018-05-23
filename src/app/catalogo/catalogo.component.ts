import { ProductosService } from './../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  modal: boolean;
  modalNombre: string;
  modalRef: string;
  modalImage: string;

  productos: Array<Producto>;
  marcas: Array<string>;
  categorias: Array<string>;

  tipoFiltro: string;
  filtro: string;

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.modal = false;
    this.tipoFiltro = 'categorias';
    this.filtro = '';
    this.productos = new Array<Producto>();
    this.marcas = new Array<string>();
    this.categorias = new Array<string>();
    this.getProductos();
  }

  getProductos(tipo?: string, filtro?: string) {
    if (tipo) {
      this.filtro = filtro;
      if (tipo === 'marca') {
        this.productosService.getProductosMar(filtro).subscribe(
          response => {
            this.productos = response.data;
            console.log(this.productos);
            this.getMarcas();
            this.getCategorias();
          },
          error => {
            console.log(error);
          }
        );
      } else if (tipo === 'categoria') {
        this.productosService.getProductosCat(filtro).subscribe(
          response => {
            this.productos = response.data;
            console.log(this.productos);
            this.getMarcas();
            this.getCategorias();
          },
          error => {
            console.log(error);
          }
        );
      }
    } else {
      this.productosService.getProductos().subscribe(
        response => {
          this.productos = response.data;
          console.log(this.productos);
          this.getMarcas();
          this.getCategorias();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  getMarcas() {
    this.productosService.getMarcas().subscribe(
      response => {
        this.marcas = response.data;
        console.log(this.marcas);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCategorias() {
    this.productosService.getCategorias().subscribe(
      response => {
        this.categorias = response.data;
        console.log(this.categorias);
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
