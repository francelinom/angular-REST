import { UsuarioAddComponent } from './components/usuario/usuario-add/usuario-add.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'usuarioList',
    component: UsuarioComponent,
  },
  {
    path: 'usuarioAdd',
    component: UsuarioAddComponent,
  },
  {
    path: 'usuarioAdd/:id',
    component: UsuarioAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
