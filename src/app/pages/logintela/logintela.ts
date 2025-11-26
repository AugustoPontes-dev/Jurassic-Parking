import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { BoxLoginComponent } from '../../box-login.component/box-login.component';

@Component({
  selector: 'app-logintela',
  standalone: true,
  imports: [BoxLoginComponent],
  templateUrl:'./logintela.html',
  styleUrls: ['./logintela.css']

})
export class LogintelaComponent {

  email: string = '';
  senha: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ){}

  login(dados: { email: string, senha: string }) {
  this.auth.login(dados.email);
}
}
