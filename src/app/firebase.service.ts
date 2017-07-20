import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from './player.model';

@Injectable()
export class FirebaseService {
  characters: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.characters = firebase.list('1')
  }

  getCharacters(){
    return this.characters;
  }
}
