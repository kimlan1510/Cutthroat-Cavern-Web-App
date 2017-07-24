import { Injectable } from '@angular/core';
import { Creature } from './creature.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Injectable()
export class CreatureListService {
  creatures: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.creatures = firebase.list('3')
  }

  getCreatures(){
    return this.creatures;
  }



}
