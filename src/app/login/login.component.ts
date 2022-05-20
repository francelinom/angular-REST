import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = {
    login: '',
    senha: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('token')?.toString().trim() !== null
    ) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.loginService.login(this.usuario);
  }
}
