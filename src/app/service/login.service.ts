import { AppConstants } from './../app-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(usuario: any) {
    return this.http
      .post(AppConstants.baseLogin, JSON.stringify(usuario))
      .subscribe(
        (data) => {
          let token = JSON.parse(JSON.stringify(data)).Authorization.split(
            ' '
          )[1];
          localStorage.setItem('token', token);
          this.router.navigate(['home']);
        },
        (error) => {
          console.log('Erro ao fazer login', error);
          alert('Acesso negado!');
        }
      );
  }
}
