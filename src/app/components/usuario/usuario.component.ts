import { User } from './../../model/user';
import { Observable } from 'rxjs';
import { UsuarioService } from './../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios?: any[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getList().subscribe((data) => {
      this.usuarios = data;
    });
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe((data) => {
      this.usuarioService.getList().subscribe((data) => {
        this.usuarios = data;
      });
    });
  }
}
