import { Injectable } from '@angular/core';

export interface Reserva {
  id: number;
  vaga: string;
  placa: string;
  data: string;
  hora: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private key = 'reservas';

  getAll(): Reserva[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  create(reserva: Reserva) {
    const reservas = this.getAll();
    reserva.id = Date.now();
    reservas.push(reserva);
    localStorage.setItem(this.key, JSON.stringify(reservas));
  }

  update(reservaAtualizada: Reserva) {
    const reservas = this.getAll().map(r =>
      r.id === reservaAtualizada.id ? reservaAtualizada : r
    );
    localStorage.setItem(this.key, JSON.stringify(reservas));
  }

  delete(id: number) {
    const reservas = this.getAll().filter(r => r.id !== id);
    localStorage.setItem(this.key, JSON.stringify(reservas));
  }
}
