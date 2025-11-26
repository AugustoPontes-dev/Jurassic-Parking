import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private router: Router) {}

  login(email: string) {
    if (email === 'admin@admin.com') {
      localStorage.setItem('perfil', 'admin');
      this.router.navigate(['/reserva']);
    } else {
      localStorage.setItem('perfil', 'user');
      this.router.navigate(['/recarga']);
    }
  }

  getPerfil() {
    return localStorage.getItem('perfil');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.getPerfil() === 'admin';
  }

  isUser(): boolean {
    return this.getPerfil() === 'user';
  }
}
