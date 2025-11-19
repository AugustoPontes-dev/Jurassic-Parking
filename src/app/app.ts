import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Michael } from "./michael/michael";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Michael],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jurassic-Parking');
}
