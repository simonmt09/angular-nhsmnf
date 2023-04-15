import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}
  private getComputerChoice(): string {
    const choices = ['r', 'p', 's'];
    const rondomChoice = Math.floor(Math.random() * 3);
    return choices[rondomChoice];
  }

  game(userchoice: string): {
    messege: string;
    userAdd: number;
    compAdd: number;
  } {
    const playUserComp = userchoice + this.getComputerChoice();

    let playStatus: {
      messege: string;
      userAdd: number;
      compAdd: number;
    };

    switch (playUserComp) {
      // Gana el usuario
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          messege: 'le gana a la computadora',
          userAdd: 1,
          compAdd: 0,
        };
        break;

      // Gana el usuario
      case 'sr':
      case 'ps':
      case 'rp':
        playStatus = {
          messege: 'la computadora ha GANADO',
          userAdd: 0,
          compAdd: 1,
        };
        break;

      // Gana el usuario
      case 'ss':
      case 'pp':
      case 'rr':
        playStatus = {
          messege: 'juego empatado',
          userAdd: 0,
          compAdd: 0,
        };
        break;
    }

    return playStatus;
    {
    }
  }
}
