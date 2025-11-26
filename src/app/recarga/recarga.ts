import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recarga',
  imports: [],
  templateUrl: './recarga.html',
  styleUrl: './recarga.css',
})
export class Recarga {

  constructor(private router: Router){}
  LogOut(){
        localStorage.clear();
        this.router.navigate(['/']);
  }

}
