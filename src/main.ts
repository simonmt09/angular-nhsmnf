import { CommonModule } from '@angular/common';
import { ApplicationInitStatus, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  name = 'juego piedr, papel o tijera';

  resultado: string;
  puntosUsuario = 0;
  puntosComputadora = 0;
}

bootstrapApplication(App);
