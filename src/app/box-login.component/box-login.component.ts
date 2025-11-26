import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-box-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './box-login.component.html',
  styleUrl: './box-login.component.css',
})
export class BoxLoginComponent {
  email: string = '';
  senha: string = '';

  @Output() onLogin = new EventEmitter<{ email: string, senha: string }>();

  enviarLogin() {
    this.onLogin.emit({
      email: this.email,
      senha: this.senha
    });
  }


}

