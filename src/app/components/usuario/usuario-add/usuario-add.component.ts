import { Telefone } from './../../../model/telefone';
import { UsuarioService } from './../../../service/usuario.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'],
})
export class UsuarioAddComponent implements OnInit {
  usuario = new User();
  telefone = new Telefone();

  constructor(
    private routeActive: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');
    if (id !== null) {
      console.log('ID', id);
      this.usuarioService.getUsuarioId(+id).subscribe((data) => {
        console.log('data', data.telefones);
        this.usuario = data;
      });
    }
  }

  salvarUsuario() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.usuarioService.upadateUsuario(this.usuario).subscribe((data) => {
        this.novo();
      });
    } else {
      this.usuarioService.salvarUsuario(this.usuario).subscribe((data) => {
        this.novo();
      });
    }
  }

  novo() {
    this.usuario = new User();
    this.telefone = new Telefone();
  }

  deletarTelefone(id: any, index: any) {
    if (id === null) {
      this.usuario.telefones?.splice(index, 1);
    }

    if (id !== null && confirm('Deseja remover?')) {
      this.usuarioService.removerTelefone(id).subscribe((data) => {
        this.usuario.telefones?.splice(index, 1);
      });
    }
  }

  adicionarTelefone() {
    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    console.log('this.telefone', this.telefone);

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();
  }
}
