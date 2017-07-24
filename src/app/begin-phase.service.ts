import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Character } from './character.model';
import { Creature } from './creature.model';

@Injectable()
export class BeginPhaseService {
  localPlayers: Player[] = [];
  encounterDeck: Creature[] = [];


  constructor( ) { }

  getInitiative(localPlayers) {
    console.log(localPlayers);
    let initiative: number[] = [1,2,3,4];
    for(let player of localPlayers) {
      var randomNumber = Math.floor(Math.random() * initiative.length);
      player.initiative = initiative[randomNumber];
      initiative.splice(randomNumber, 1)
    }
  }

}
