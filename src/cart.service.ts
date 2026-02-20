import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://127.0.0.1:8000/api/carrito/';

  constructor(private http: HttpClient) { }

  agregarAlCarrito(viaje: any): Observable<any> {
    const url = `${this.apiUrl}agregar/`;
    return this.http.post(url, viaje, { withCredentials: true });
  }


  obtenerCarrito(): Observable<any> {
    const url = `${this.apiUrl}ver/`;
    return this.http.get(url, { withCredentials: true });
  }
}