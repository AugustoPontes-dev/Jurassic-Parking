import { Routes } from '@angular/router';
import { Logintela } from './pages/logintela/logintela';
import { Component } from '@angular/core';
import { Cadastrotela } from './pages/logintela/cadastrotela/cadastrotela';
import { Reservastela } from './pages/logintela/reservastela/reservastela';

export const routes: Routes = [
  { path: 'qualquer coisa', component: Logintela },
  { path: 'cadastro', component: Cadastrotela },
  { path: '', component: Reservastela},
]; 