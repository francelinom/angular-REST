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
  indexSelecionado?: any;
  nome = '';
  pag: any;
  total: number = 0;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getList().subscribe((data) => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }

  preparaDelecao(usuario: any, index: number) {
    this.usuarioSelecionado = usuario;
    this.indexSelecionado = index;
  }

  deleteUsuario() {
    this.usuarioService
      .deleteUsuario(this.usuarioSelecionado.id)
      .subscribe((data) => {
        this.usuarios.splice(this.indexSelecionado, 1);
      });
  }

  consultarUsuario() {
    if (this.nome === '') {
      this.usuarioService.getList().subscribe((data) => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    } else {
      this.usuarioService.consultarUsuario(this.nome).subscribe((data) => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    }
  }

  carregarPagina(pagina: any) {
    if (this.nome !== '') {
      this.usuarioService
        .consultarUsuarioPage(this.nome, pagina - 1)
        .subscribe((data) => {
          this.usuarios = data.content;
          this.total = data.totalElements;
        });
    } else {
      this.usuarioService.getListPage(pagina - 1).subscribe((data) => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    }
  }
}
