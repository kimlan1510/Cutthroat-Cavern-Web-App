import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Creature } from './creature.model';


@Injectable()
export class DeckService {
  creature: Creature;
  player: Player;

  constructor() { }

  //Regular attack cards
  playAttackCards(player, creature){
    if(creature.hp[1] > 0){
      console.log(creature.hp[1]);
      if(player.setAttackCard.name == "attack 40"){
        creature.hp[1] -= 40;
        if(creature.hp[1] <= 0 ){
          player.prestige += creature.prestige;
        }
      } else if(player.setAttackCard.name == "attack 25"){
        creature.hp[1] -= 25;
        if(creature.hp[1] <= 0 ){
          player.prestige += creature.prestige;
        }
      } else if(player.setAttackCard.name == "poke with stick 0"){
        creature.hp[1] = creature.hp[1];
        if(creature.hp[1] <= 0 ){
          player.prestige += creature.prestige;
        }
      }
    }
  }

  //use Action card
  playActionCards(player){

  }

}
