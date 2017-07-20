import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from './player.model';
import { Character } from './character.model';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  localPlayers: Player[] = [];

  constructor(private firebase: AngularFireDatabase) {
    this.players = firebase.list('2')
  }

  createPlayer(name: string, chosenCharacter: Character){
    var prestige: number = 0;
    var hand: any[] = ["cards"];
    var hp: number = 100;
    var initiative: number = 0;
    if(chosenCharacter == null || name == '') {
      alert("Please Enter Your Name And Pick A Character.");
    } else {
      let newPlayer: Player = new Player(name, prestige, hp, initiative, chosenCharacter);
      this.players.push(newPlayer);
      this.localPlayers.push(newPlayer);
      return this.players;
    }
  }

  getPlayers(){
    return this.players;
  }

  getLocalPlayers(){
    return this.localPlayers;
  }
}
