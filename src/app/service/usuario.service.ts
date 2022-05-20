import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  getUsuarioId(id: number): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  consultarUsuario(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + 'usuarioPorNome/' + nome);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, {
      responseType: 'text',
    });
  }

  salvarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, usuario);
  }

  upadateUsuario(usuario: any): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, usuario);
  }
}
