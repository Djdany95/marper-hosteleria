import { ProductosService } from './../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  logged: boolean;
  listaMarca: boolean;
  nuevaMarca: boolean;
  listaCat: boolean;
  nuevaCat: boolean;

  adminUser: string;
  adminPass: string;

  referencia: string;
  nombre: string;
  precio: number;
  marca: string;
  categoria: string;
  imageUrl: string;
  destacado: boolean;
  edit: boolean;
  pRef: string;

  productos: Array<Producto>;
  marcas: Array<string>;
  categorias: Array<string>;

  modal: boolean;
  modalNombre: string;
  modalRef: string;
  modalImage: string;

  constructor(
    private adminService: AdminService,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    this.logged = false;
    this.listaCat = true;
    this.listaMarca = true;
    this.nuevaCat = false;
    this.nuevaMarca = false;
    this.modal = false;
    this.edit = false;
    this.getProductos();
  }

  login() {
    this.adminService.login(this.adminUser, this.adminPass).subscribe(
      response => {
        this.logged = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoProducto() {
    const producto = new Producto(
      this.referencia,
      this.nombre,
      this.precio,
      this.categoria,
      this.marca,
      this.imageUrl,
      this.destacado
    );
    this.productosService.newProducto(producto).subscribe(
      response => {
        console.log(response);
        this.referencia = '';
        this.nombre = '';
        this.precio = 0;
        this.categoria = '';
        this.marca = '';
        this.imageUrl = '';
        this.destacado = false;
        this.getProductos();
      },
      error => {
        console.log(error);
      }
    );
  }

  getProductos() {
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

  editar(
    ref: string,
    nombre: string,
    precio: number,
    marca: string,
    categoria: string,
    image: string,
    destacado: boolean
  ) {
    this.pRef = ref;
    this.referencia = ref;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.marca = marca;
    this.imageUrl = image;
    this.destacado = destacado;
    this.edit = true;

    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  editarProducto() {
    const producto = new Producto(
      this.referencia,
      this.nombre,
      this.precio,
      this.categoria,
      this.marca,
      this.imageUrl,
      this.destacado
    );
    this.productosService.editProducto(this.pRef, producto).subscribe(
      response => {
        console.log(response);
        this.edit = false;
        this.referencia = '';
        this.nombre = '';
        this.precio = 0;
        this.categoria = '';
        this.marca = '';
        this.imageUrl = '';
        this.destacado = false;
        this.getProductos();
      },
      error => {
        console.log(error);
      }
    );
  }

  borrarProducto(referencia: string) {
    this.productosService.deleteProducto(referencia).subscribe(
      response => {
        console.log(response);
        this.getProductos();
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
