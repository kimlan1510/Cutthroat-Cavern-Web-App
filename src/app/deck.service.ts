import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { Creature } from './creature.model';

@Injectable()
export class DeckService {
  actionCard;
  creature: Creature;
  player: Player;
  deck: any[] = [];
  shuffleDeck: any[] = [];
  localPlayers: Player[] = [];

  constructor() { }

  //get cards from firebase
  getCards(cards: any){
    //Retrieve cards from firebase
    for(let card of cards[0][0].attackCards){
      for(let i = 1; i < 26; i++){
        this.deck.push(card);
      }
    }
    for(let card of cards[0][1].actionCards){
      for(let i = 1; i < 8; i++){
        this.deck.push(card);
      }
    }
    for(let card of cards[0][2].itemCards){
      for(let i = 1; i < 8; i++){
        this.deck.push(card);
      }
    }
    //Populate deck
    while(this.deck.length > 0){
      let i = this.deck.length;
      var randomNumber = Math.floor(Math.random() * i);
      var singleCard = this.deck[randomNumber];
      this.shuffleDeck.push(singleCard);
      this.deck.splice(this.deck.indexOf(singleCard), 1);
    }
      return this.shuffleDeck;
  }

  //set cards in play
  setCardInPlay(card: any, player: Player){
    //use potion card
    if(card.name == "Potion Of Healing"){
      if(player.hp == 100){
        alert("This player's hp is full.");
      }
      else
      {
        player.hp += 25;
        if(player.hp > 100){
          player.hp = 100;
        }
        player.hand.splice(player.hand.indexOf(card), 1);
      }
    }
    //set action card
    else if(card.name == "Edge Out" || card.name == "Mixed Signal"){
      this.actionCard = card;
      alert("Select a target.");
      player.hand.splice(player.hand.indexOf(card), 1);
    }
    //set attack card
    else if(card.name == "Attack 40"){
      player.hand.splice(player.hand.indexOf(card), 1);
      player.setAttackCard = card;
    }
    else if(card.name == "Attack 25"){
      player.hand.splice(player.hand.indexOf(card), 1);
      player.setAttackCard = card;
    }
    else if(card.name == "Poke With Stick 0"){
      player.hand.splice(player.hand.indexOf(card), 1);
      player.setAttackCard = card;
    }
  }

  //Regular attack cards
  playAttackCards(player, creature){
    if(creature.hp[1] > 0){
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

  //DealCards
  dealCards(localPlayers){
    for(let player of localPlayers){
      for(let i=0; i<7; i++){
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0, 1);
      }
    }
    return this.shuffleDeck;
  }

  discard(player){
    player.hand = ["cards"];
    for(let i=0; i<7; i++){
      player.hand.push(this.shuffleDeck[0]);
      this.shuffleDeck.splice(0, 1);
    }
    return this.shuffleDeck;
  }

  drawToMaxHand(player){
    if(player.hand.length < 8){
      for(let i=player.hand.length; i < 8; i++){
        player.hand.push(this.shuffleDeck[0]);
        this.shuffleDeck.splice(0, 1);
      }
    }
    else{
      alert("Your hand is full.");
    }
    return this.shuffleDeck;
  }

  //use Action card
  playActionCards(player: Player){
    player.setActionCard = this.actionCard;
    console.log(player);
  }
}
