import { User } from './../../../model/user';
import { UsuarioService } from './../../../service/usuario.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios: User[] = [];
  usuarioSelecionado?: any;
  nome = '';
  pag: any;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getList().subscribe((data) => {
      this.usuarios = data;
    });
  }

  preparaDelecao(usuario: any) {
    this.usuarioSelecionado = usuario;
  }

  deleteUsuario() {
    this.usuarioService
      .deleteUsuario(this.usuarioSelecionado.id)
      .subscribe((data) => {
        this.ngOnInit();
      });
  }

  consultarUsuario() {
    this.usuarioService.consultarUsuario(this.nome).subscribe((data) => {
      this.usuarios = data;
    });
  }
}
