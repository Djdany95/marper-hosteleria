import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:3678/api/';
  }

  getMarcas(): Observable<any> {
    return this._http.get(this.url + 'marcas/');
  }
  getCategorias(): Observable<any> {
    return this._http.get(this.url + 'categorias/');
  }
  getProductos(): Observable<any> {
    return this._http.get(this.url + 'productos/');
  }
  getProductosCat(categoria: string): Observable<any> {
    return this._http.get(this.url + 'productoscat/' + categoria);
  }
  getProductosMar(marca: string): Observable<any> {
    return this._http.get(this.url + 'productosmar/' + marca);
  }
  getDestacados(): Observable<any> {
    return this._http.get(this.url + 'destacados/');
  }

  newProducto(producto: Producto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(
      this.url + 'producto/',
      {
        referencia: producto.referencia,
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
        marca: producto.marca,
        imageUrl: producto.imageUrl,
        destacado: producto.destacado
      },
      { headers: headers }
    );
  }

  editSeries(referencia: string, producto: Producto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(
      this.url + 'producto/' + referencia,
      {
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
        marca: producto.marca,
        imageUrl: producto.imageUrl,
        destacado: producto.destacado
      },
      { headers: headers }
    );
  }

  deleteSeries(referencia: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this._http.delete(this.url + 'producto/' + referencia, httpOptions);
  }
}
