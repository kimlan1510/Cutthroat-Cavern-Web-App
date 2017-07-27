import { Injectable } from '@angular/core';
import { Creature } from './creature.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { Player } from './player.model';
import { BeginPhaseService } from './begin-phase.service';

@Injectable()
export class CreatureListService {
  creatures: FirebaseListObservable<any[]>;
  creature;
  localPlayers: Player[] = [];
  attackArray: string[] = ["Attack 100", "Attack 50", "Attack 40", "Attack 30", "Attack 25", "Attack 20", "Attack 10", "Attack 5", "Poke With Stick 0"];

  constructor(private firebase: AngularFireDatabase, private beginPhase: BeginPhaseService) {
    this.creatures = firebase.list('3')
  }
  //get creatures from Firebase
  getCreatures(){
    return this.creatures;
  }
  //Loops through array of creatures, eliminate creature whose hp is > 0
  killCreatures(listPlayers: any[], encounterDeck: Creature[], localPlayers: Player[]){
    for(let i=1; i<encounterDeck.length; i++){
      this.creature = encounterDeck[0];
      if(encounterDeck[i].hp[1] > 0 && encounterDeck[i-1].hp[1] <= 0)
      {
        this.creature = encounterDeck[i];
      }
      if(this.creature.name == "RIPPER")
      {
        this.ripper(listPlayers, this.creature, localPlayers);
        if(this.creature.hp[1] <= 0){
          alert("Ready for the next battle!");
          return encounterDeck[i];
        }
        else{
          return this.creature;
        }
      }
      else if(this.creature.name == "ANTI-PALADIN"){
        this.antiPaladin(listPlayers, this.creature, localPlayers);
        return this.creature;
      }
    }
  }
  //do damage to creature
  doDamage(listPlayers, creature){
    for(let i=1; i<5; i++){
      for(let player of listPlayers){
        if(player.initiative == i){
          if(creature.hp[1] > 0){
            for(let attack of this.attackArray) {
              if(player.setAttackCard.name == attack){
                creature.hp[1] -= player.setAttackCard.normalAttack;
                this.checkHP(player, creature);
              }
            }
          }
        }
      }
    }
  }
  //Checks if creature is dead
  checkHP(player, creature) {
    if(creature.hp[1] <= 0 ){
      player.prestige += creature.prestige;
      creature.hp[1] = 0;
    }
  }
  //RIPPER functionality
  ripper(listPlayers, creature, localPlayers){
    console.log(listPlayers);
    this.doDamage(listPlayers, creature);
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
  //ANTI-PALADIN functionality
  antiPaladin(listPlayers, creature, localPlayers){
    console.log(creature);
    this.doDamage(listPlayers, creature);
    this.beginPhase.getInitiative(localPlayers);
    for(let player of localPlayers) {
      if(creature.hp[1] > 0){
        player.hp -= 5;
        creature.hp[1] += 5;
      }
    }
  }
}
