import { Routes } from '@angular/router';
import { LogintelaComponent } from './pages/logintela/logintela';
import { Component } from '@angular/core';
import { Cadastrotela } from './pages/logintela/cadastrotela/cadastrotela';
import { ReservastelaComponent } from './pages/logintela/reservastela/reservastela';
import { Telausuario } from './pages/telausuario/telausuario';

export const routes: Routes = [
  { path: '', component: LogintelaComponent },
  { path: 'cadastro', component: Cadastrotela },
  { path: 'reserva', component: ReservastelaComponent},
  { path: 'recarga', component: Telausuario }
]; 