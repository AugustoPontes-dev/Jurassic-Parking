import { Component } from '@angular/core';
import { Augusto } from "../../../augusto/augusto";
import { Michael } from "../../../michael/michael";

@Component({
  selector: 'app-reservastela',
  standalone: true,
  imports: [Michael, Augusto],
  templateUrl: './reservastela.html',
  styleUrl: './reservastela.css',
})
export class Reservastela {

}

