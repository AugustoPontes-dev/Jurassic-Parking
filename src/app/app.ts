import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxLogin } from "./box-login/box-login";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoxLogin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jurassic-Parking');
}
