import { UsuarioComponent } from './components/usuario/usuario/usuario.component';

import { HttpInterceptorModule } from './service/header-interceptor.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioAddComponent } from './components/usuario/usuario-add/usuario-add.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

export const optionsMask: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuarioComponent,
    UsuarioAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpInterceptorModule,
    NgxMaskModule.forRoot(optionsMask),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
