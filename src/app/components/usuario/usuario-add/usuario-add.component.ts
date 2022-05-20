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

  constructor(
    private routeActive: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');
    if (id != null) {
      this.usuarioService.getUsuarioId(+id).subscribe((data) => {
        console.log('data', data);
        this.usuario = data;
      });
    }
  }

  salvarUsuario() {
    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      console.log('aqui1');
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
  }
}
