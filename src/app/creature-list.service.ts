import { Injectable } from '@angular/core';
import { Creature } from './creature.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Player } from './player.model';

@Injectable()
export class CreatureListService {
  creatures: FirebaseListObservable<any[]>;
  localPlayers: Player[] = [];

  constructor(private firebase: AngularFireDatabase) {
    this.creatures = firebase.list('3')
  }

  getCreatures(){
    return this.creatures;
  }

  ripper(localPlayers: Player[]){
    for(let player of localPlayers) {
      if(player.initiative == 2)  {
        player.health -= 15;
      }
    }
  }

}
