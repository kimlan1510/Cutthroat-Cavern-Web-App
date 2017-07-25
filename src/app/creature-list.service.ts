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

  ripper(listPlayers: any[], creature: Creature){
    for(let i=1; i<5; i++){
      for(let player of listPlayers){
        if(player.initiative == i){
          if(creature.hp[1] > 0){
            if(player.setAttackCard.name == "Attack 40"){
              creature.hp[1] -= 40;
              console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            } else if(player.setAttackCard.name == "Attack 25"){
              creature.hp[1] -= 25;
              console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            } else if(player.setAttackCard.name == "Poke With Stick 0"){
              creature.hp[1] = creature.hp[1];
              console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
          }
        }
      }
    }

    // for(let player of listPlayers) {
    //   if(player.initiative == 2)  {
    //     player.health -= 15;
    //   }
    // }
    // console.log(listPlayers);
  }

}
