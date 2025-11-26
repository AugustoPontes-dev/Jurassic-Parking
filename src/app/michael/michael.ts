import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-michael',
  imports: [],
  templateUrl: './michael.html',
  styleUrl: './michael.css',
})
export class Michael {
  constructor(private router: Router){}
    LogOut(){
        localStorage.clear();
        this.router.navigate(['/']);
}
}
