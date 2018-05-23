import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:3678/api/';
  }

  login(usuario: string, pass: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(
      this.url + 'login/',
      { usuario: usuario, pass: pass },
      { headers: headers }
    );
  }
}
