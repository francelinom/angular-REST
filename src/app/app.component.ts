import { LoginService } from './service/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-REST';

  usuario = {
    login: '',
    senha: '',
  };

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login(this.usuario);
  }
}
