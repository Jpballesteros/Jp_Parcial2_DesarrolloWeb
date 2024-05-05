import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  private url = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  Obtenerproducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}`);
  }

  Obtenerproductoporid(id: number): Observable<any> {
      return this.http.get(`${this.url}/${id}`);
    }

}
