import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Character } from './character.model';

@Injectable()
export class PlayerService {
  players: Player[] = []

  constructor() { }

  createPlayer(name: string, chosenCharacter: Character){
    var prestige: number = 0;
    var hand: any[] = null;
    var hp: number = 100;
    var initiative: number = null;
    if(chosenCharacter == null) {
      alert("Please Pick A Character.");
    } else {
      let newPlayer: Player = new Player(name, prestige, hand, hp, initiative, chosenCharacter);
      this.players.push(newPlayer);
      return this.players;
    }
  }
}
