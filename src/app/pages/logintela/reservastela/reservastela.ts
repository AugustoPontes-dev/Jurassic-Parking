import { Component, OnInit } from '@angular/core';
import { ReservasService, Reserva } from '../../../services/reservas';
import { Michael } from '../../../michael/michael';
import { Augusto } from '../../../augusto/augusto';

@Component({
  selector: 'app-reservastela',
  standalone: true,
  imports:[Michael, Augusto],
  templateUrl: './reservastela.html',
  styleUrls: ['./reservastela.css']
})
export class ReservastelaComponent implements OnInit {

  reservas: Reserva[] = [];
  reserva: Reserva = {} as Reserva;
  editando = false;

  constructor(private service: ReservasService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.reservas = this.service.getAll();
  }

  salvar() {
    if (this.editando) {
      this.service.update(this.reserva);
    } else {
      this.service.create(this.reserva);
    }

    this.reserva = {} as Reserva;
    this.editando = false;
    this.listar();
  }

  editar(r: Reserva) {
    this.reserva = { ...r };
    this.editando = true;
  }

  excluir(id: number) {
    this.service.delete(id);
    this.listar();
  }
}
