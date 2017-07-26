import { Injectable } from '@angular/core';
import { Creature } from './creature.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Player } from './player.model';
import { BeginPhaseService } from './begin-phase.service';

@Injectable()
export class CreatureListService {
  creatures: FirebaseListObservable<any[]>;
  localPlayers: Player[] = [];

  constructor(private firebase: AngularFireDatabase, private beginPhase: BeginPhaseService) {
    this.creatures = firebase.list('3')
  }

  getCreatures(){
    return this.creatures;
  }

  ripper(listPlayers: any[], creature: Creature, localPlayers: Player[]){
    console.log(listPlayers);
    for(let i=1; i<5; i++){
      for(let player of listPlayers){
        if(player.initiative == i){
          if(creature.hp[1] > 0){
            if(player.setAttackCard.name == "Attack 100"){
              creature.hp[1] -= 100;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 50"){
              creature.hp[1] -= 50;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 40"){
              creature.hp[1] -= 40;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 30"){
              creature.hp[1] -= 30;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 25"){
              creature.hp[1] -= 25;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 20"){
              creature.hp[1] -= 20;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 10"){
              creature.hp[1] -= 10;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Attack 5"){
              creature.hp[1] -= 5;
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
            else if(player.setAttackCard.name == "Poke With Stick 0"){
              creature.hp[1] = creature.hp[1];
              // console.log(player.initiative);
              if(creature.hp[1] <= 0 ){
                player.prestige += creature.prestige;
              }
            }
          }
        }
      }
    }
    this.beginPhase.getInitiative(localPlayers);
    for(let player of localPlayers) {
      if(creature.hp[1] > 0){
        if(player.initiative == 2)  {
          player.hp -= 15;
          let randomCard = Math.floor(Math.random() * player.hand.length);
          player.hand.splice(randomCard, 1)
        }
      }
    }
  }

}
