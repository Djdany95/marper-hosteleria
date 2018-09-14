import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api } from '../constants/api-url.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = api;
  }

  sendFeedback(nombre: string, email: string, msg: string, telefono?: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(
      this.url + 'contacto/',
      {
        nombre: nombre,
        email: email,
        telefono: telefono,
        msg: msg
      },
      { headers: headers }
    );
  }
}
