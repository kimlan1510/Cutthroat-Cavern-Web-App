import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from './player.model';

@Injectable()
export class FirebaseService {
  characters: FirebaseListObservable<any[]>;
  cards: FirebaseListObservable<any[]>;
  creatures: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.characters = firebase.list('1');
    this.cards = firebase.list('0');
    this.creatures = firebase.list('2');
  }

  getCharacters(){
    return this.characters;
  }

  getCards(){
    return this.cards;
  }

  getCreatures() {
    return this.creatures;
  }

}
