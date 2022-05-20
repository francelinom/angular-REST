import { GuardiaoGuard } from './service/guardiao.guard';
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
    canActivate: [GuardiaoGuard],
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
    canActivate: [GuardiaoGuard],
  },
  {
    path: 'usuarioAdd',
    component: UsuarioAddComponent,
    canActivate: [GuardiaoGuard],
  },
  {
    path: 'usuarioAdd/:id',
    component: UsuarioAddComponent,
    canActivate: [GuardiaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
